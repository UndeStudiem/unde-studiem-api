const { College } = require('../../data');
const { sanitizeObject } = require('../../utils/sanitize');

const create = async (body) => {
   const record = new College({
      name: body.name,
      university: ObjectId(universityId),
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
   const searchOptions = {
      university: query.universityId
   };
   sanitizeObject(searchOptions);

   return await College
      .find(searchOptions)
      .skip(query.size * query.page)
      .limit(query.size);
};

const getById = async (id) => {
   return await College.findById(id);
};

module.exports = {
   create,
   getAll,
   getById,
}