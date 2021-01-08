const { ForumPost } = require('../../data');
const { sanitizeObject } = require('../../utils/sanitize');

const create = async (body) => {
   console.log(body.programId)
   const record = new ForumPost({
      universityOpinion: body.universityOpinion,
      programOpinion: body.programOpinion,
      authorName: body.authorName,
      authorAge: body.authorAge,
      authorGender: body.authorGender,
      program: ObjectId(body.programId),
      university: ObjectId(body.universityId),
      college: ObjectId(body.collegeId),
      promotionYear: body.promotionYear,
      programStarGrade: body.programStarGrade,
      timestamp: body.timestamp
   });
   await record.save();
};

const getAll = async (query) => {
   const searchOptions = {
      university: query.universityId,
      college: query.collegeId,
      program: query.programId
   };
   sanitizeObject(searchOptions);
   return await ForumPost
      .find(searchOptions)
      .skip(query.size * query.page)
      .limit(query.size);
};

const getById = async (id) => {
   return await ForumPost.findById(id);
};

module.exports = {
   create,
   getAll,
   getById
}