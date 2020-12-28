
const universitySchema = {
   name: {
      in: ['body'],
      errorMessage: 'University name is missing from body',
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
   universitySchema,
   querySchema
}