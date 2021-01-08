const { Program } = require('../../data');
const { sanitizeObject } = require('../../utils/sanitize');
const { ObjectId } = require('mongodb');

const create = async (body) => {
   const record = new Program({
      name: body.name,
      college: ObjectId(body.collegeId),
      degree: body.degree,
      language: body.language,
      type: body.type,
      field: body.field,
      accredited: body.accredited,
      duration: body.duration,
      organization: body.organization,
      credits: body.credits,
      totalPlaces: body.totalPlaces,
      taxFreePlaces: body.taxFreePlaces,
      taxPlaces: body.taxPlaces,
      admissionType: body.admissionType,
      courses: body.courses,
      competencies: body.competencies
   });
   await record.save();
};

const getAll = async (query) => {

   cities = query.cities ? query.cities.split('-') : []
   fields = query.fields ? query.fields.split('-') : []

   const searchOptions = {
      name: { $regex: '.*' + (query.name ? query.name : '') + '.*'},
      degree: query.degree,
      language: query.language,
      type: query.type,
      college: query.collegeId,
   };
   sanitizeObject(searchOptions);


   let programs = await Program
      .find(searchOptions)
      .populate({ path: 'college', populate: { path: 'university' }})
      .skip(query.size * query.page)
      .limit(query.size)


   return programs.filter(Element => cities.length ? cities.includes(Element.college.university.city) : Element)
                  .filter(Element => fields.length ? fields.includes(Element.field) : Element)
};

const getById = async (id) => {
   return await Program.findById(id);
};


module.exports = {
   create,
   getAll,
   getById,
}