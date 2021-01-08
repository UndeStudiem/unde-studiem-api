const { University } = require('../../data');
const { sanitizeObject } = require('../../utils/sanitize');


const create = async (body) => {
   const record = new University({
      name: body.name,
      shortname: body.shortname,
      city: body.city,
      description: body.description,
      website: body.website,
      year: body.year,
      faculties: body.faculties,
      students: body.students
   });
   await record.save();
};

const getAll = async (query) => {

   cities = query.cities ? query.cities.split('-') : []

   const searchOptions = {
      name: { $regex: '.*' + (query.name ? query.name : '') + '.*'},
      city: query.city
   };
   sanitizeObject(searchOptions);

   return (await University
      .find(searchOptions)
      .skip(query.size * query.page)
      .limit(query.size))
      .filter(Element => cities.length ? cities.includes(Element.city) : Element)
};

const getById = async (id) => {
   return await University.findById(id);
};

module.exports = {
   create,
   getAll,
   getById
}