const { College } = require('../../data');
const { sanitizeObject } = require('../../utils/sanitize');
const { ObjectId } = require('mongodb');
const programService = require('../Program/services.js');

const create = async (body) => {
   const record = new College({
      name: body.name,
      university: ObjectId(body.universityId),
      description: body.description,
      graduateRate: body.graduateRate,
      employabilityRate: body.employabilityRate,
      studentOrganizations: body.studentOrganizations,
      partnerships: body.partnerships,
      accommodationType: body.accommodationType,
      otherFacilities: body.otherFacilities
   });
   await record.save();
};

const getAll = async (query) => {

   cities = query.cities ? query.cities.split('-') : []
   myfields = query.fields ? query.fields.split('-') : []

   const searchOptions = {
      name: { $regex: '.*' + (query.name ? query.name : '') + '.*'},
      university: query.universityId
   };
   sanitizeObject(searchOptions);

   let colleges =  (await College
      .find(searchOptions)
      .populate({ path: 'university'})
      .skip(query.size * query.page)
      .limit(query.size))
      .filter(Element => cities.length ? cities.includes(Element.university.city) : Element)

   let collegesList = []

   for(let college of colleges){
      let programs = (await programService.getAll({page: 0, size: 1000, collegeId: college._id}))
      
      let selectedPrograms = myfields.length 
         ? programs.filter(program => myfields.includes(program.field))
         : programs

      if(selectedPrograms.length){
         college = {...college._doc}
         college['fields'] = [...new Set(programs.map(Element => Element.field))]
         collegesList.push(college)
      }
   }
   return collegesList
};

const getById = async (id) => {
   return await College.findById(id);
};

module.exports = {
   create,
   getAll,
   getById,
}