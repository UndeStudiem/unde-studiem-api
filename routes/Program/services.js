const { Program } = require('../../data');

const create = async (name, collegeId) => {
   const record = new Program({
      name,
      college: collegeId
   });
   await record.save();
};

const getAll = async (query) => {
   return await Program
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

module.exports = {
   create,
   getAll,
}