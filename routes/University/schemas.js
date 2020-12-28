
const universitySchema = {
   name: {
      in: ['body'],
      errorMessage: 'University name is missing from body',
      matches: '[a-zA-Z0-9_\.\-]',
      isLength: {
         options: {
            max: 100
         }
      },
   },
   city: {
      in: ['body'],
      errorMessage: 'University city is missing from body',
      isLength: {
         options: {
            max: 100
         }
      },
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
   universitySchema,
   querySchema
}