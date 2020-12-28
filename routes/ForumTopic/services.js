const { ForumTopic } = require('../../data');

const create = async (name, forumId) => {
   const record = new ForumTopic({
      name,
      forum: forumId
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