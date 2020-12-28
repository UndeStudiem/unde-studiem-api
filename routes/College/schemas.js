
const collegeSchema = {
   name: {
      in: ['body'],
      errorMessage: 'College name is missing from body',
      matches: '[a-zA-Z0-9_\.\-]',
      isLength: {
         options: {
            max: 100
         }
      },
   },
   universityId: {
      in: ['body'],
      errorMessage: 'University Id is missing from body',
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
   collegeSchema,
   querySchema
}