const { College } = require('../../data')

const create = async (name, universityId) => {
   const record = new College({
      name,
      university: universityId
   });
   await record.save();
};

const getAll = async (query) => {
   return await College
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

module.exports = {
   create,
   getAll,
}