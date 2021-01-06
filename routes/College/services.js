const { College } = require('../../data')

const create = async (name, universityId, description, graduateRate, employabilityRate, studentOrganizations,
                      partnerships, accommodationType, otherFacilities) => {
   const record = new College({
      name,
      university: universityId,
      description,
      graduateRate,
      employabilityRate,
      studentOrganizations,
      partnerships,
      accommodationType,
      otherFacilities
   });
   await record.save();
};

const getAll = async (query) => {
   return await College
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

const getById = async (id, query) => {
   return await College.findById(id)
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByUniversityId = async (universityId, query) => {
   return await College.find({
      university: universityId
   })
};

module.exports = {
   create,
   getAll,
   getById,
   getByUniversityId
}