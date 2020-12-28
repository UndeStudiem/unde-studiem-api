
const programSchema = {
   name: {
      in: ['body'],
      errorMessage: 'Program name is missing from body',
      isAlpha: {
         options: {
            ignore: [' ', '\'', '\"']
         }
      },
      isLength: {
         options: {
            max: 100
         }
      },
   },
   collegeId: {
      in: ['body'],
      errorMessage: 'College Id is missing from body',
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
   programSchema,
   querySchema
}