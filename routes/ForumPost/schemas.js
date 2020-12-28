
const forumPostSchema = {
   text: {
      in: ['body'],
      errorMessage: 'Program name is missing from body',
      isLength: {
         options: {
            min: 20,
            max: 1000
         }
      },
   },
   forumTopicId: {
      in: ['body'],
      errorMessage: 'Forum Topic Id is missing from body',
      isInt: true,
      toInt: true
   }
};


const querySchema = {
   pageNumber: {
      in: ['query'],
      errorMessage: 'Page number is missing from query',
      isInt: true,
      toInt: true
   },
   pageSize: {
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