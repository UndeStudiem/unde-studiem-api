import { ForumPost } from '../../data';

const create = async (text, authorId, forumTopicId) => {
   const record = new ForumPost({
      text,
      author: authorId,
      topic: forumTopicId
   });
   await record.save();
};

const getAll = async (query) => {
   return await ForumPost
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

module.exports = {
   create,
   getAll,
}