const { Forum } = require('../../data');

const create = async (name, universityId) => {
   const record = new Forum({
      name,
      university: universityId
   });
   await record.save();
};

const getAll = async (query) => {
   return await Forum
      .find()
      .populate('university')
      .skip(query.size * query.page)
      .limit(query.size);
};

module.exports = {
   create,
   getAll,
}