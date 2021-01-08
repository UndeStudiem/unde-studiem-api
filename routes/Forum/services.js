const { Forum } = require('../../data');

const create = async (body) => {
   const record = new Forum({
      name: body.name,
      university: ObjectId(body.universityId)
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