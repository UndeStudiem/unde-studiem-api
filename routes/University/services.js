const { University } = require('../../data');

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
   const searchOptions = {
      name: query.name,
      city: query.city
   };
   sanitizeObject(searchOptions);

   return await University
      .find(searchOptions)
      .skip(query.size * query.page)
      .limit(query.size);
};

const getById = async (id) => {
   return await University.findById(id);
};

module.exports = {
   create,
   getAll,
   getById
}