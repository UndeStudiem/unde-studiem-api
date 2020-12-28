
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
      isInt: true,
      toInt: true
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
   reviewSchema,
   querySchema
}