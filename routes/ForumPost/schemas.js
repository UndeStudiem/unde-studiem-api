
const forumPostSchema = {
   universityOpinion: {
      in: ['body'],
      errorMessage: 'Forum Post universityOpinion is missing from body'
   },
   programOpinion: {
      in: ['body'],
      errorMessage: 'Forum Post programOpinion is missing from body'
   },
   authorName: {
      in: ['body'],
      errorMessage: 'Forum Post authorName is missing from body'
   },
   authorAge: {
      in: ['body'],
      errorMessage: 'Forum Post authorAge is missing from body'
   },
   authorGender: {
      in: ['body'],
      errorMessage: 'Forum Post authorGender is missing from body'
   },
   programId: {
      in: ['body'],
      errorMessage: 'Forum Post program Id is missing from body'
   },
   universityId: {
      in: ['body'],
      errorMessage: 'Forum Post university Id is missing from body'
   },
   collegeId: {
      in: ['body'],
      errorMessage: 'Forum Post college Id is missing from body'
   },
   promotionYear: {
      in: ['body'],
      errorMessage: 'Forum Post promotionYear is missing from body'
   },
   programStarGrade: {
      in: ['body'],
      errorMessage: 'Forum Post starGrade is missing from body'
   },
   timestamp: {
      in: ['body'],
      errorMessage: 'Forum Post timestamp is missing from body'
   },

};


const querySchema = {
   page: {
      in: ['query'],
      errorMessage: 'Page number is missing from query',
      isInt: true,
      toInt: true
   },
   size: {
      in: ['query'],
      errorMessage: 'Page size city is missing from query',
      isInt: true,
      toInt: true
   }
};

module.exports = {
   forumPostSchema,
   querySchema
}