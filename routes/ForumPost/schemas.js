
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
      matches: '^[0-9a-fA-F]{24}$',
   }
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