const { University } = require('../../data');

const create = async (name, shortname, city,  description, website, year, faculties, students) => {
   const record = new University({
      name,
      shortname,
      city,
      description,
      website,
      year,
      faculties,
      students
   });
   await record.save();
};

const getAll = async (query) => {
   return await University
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

const getById = async (id, query) => {
   return await University.findById(id)
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByCity = async (city, query) => {
   return await University.find({
      city: city
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByName = async ( name, query) => {
   return await University.find({
      name: name
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

module.exports = {
   create,
   getAll,
   getById,
   getByCity,
   getByName
}