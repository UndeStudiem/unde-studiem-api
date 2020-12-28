const { Review } = require('../../data');

const create = async (text, authorId, programId, score) => {
   const record = new Review({
      text,
      author: authorId,
      program: programId,
      score
   });
   await record.save();
};

const getAll = async (query) => {
   return await Review
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

module.exports = {
   create,
   getAll,
}