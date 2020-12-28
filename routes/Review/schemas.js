
const reviewSchema = {
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
   programId: {
      in: ['body'],
      errorMessage: 'Program Id is missing from body',
      matches: '^[0-9a-fA-F]{24}$',
   },
   score : {
      in: ['body'],
      errorMessage: 'Score is missing from body',
      isInt: {
         options: {
            min: 1,
            max: 10
         }
      },
      toInt: true,
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
   reviewSchema,
   querySchema
}