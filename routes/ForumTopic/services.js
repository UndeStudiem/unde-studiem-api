import { ForumTopic } from '../../data';

const create = async (name, universityId) => {
   const record = new ForumTopic({
      name,
      university: universityId
   });
   await record.save();
};

const getAll = async (query) => {
   return await ForumTopic
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

module.exports = {
   create,
   getAll,
}