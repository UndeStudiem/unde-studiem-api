
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
   shortname: {
      in: ['body'],
      errorMessage: 'University shortname is missing from body',
      matches: '[A-Z]',
      isLength: {
         options: {
            max: 10
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
   },
   description: {
      in: ['body'],
      errorMessage: 'University description is missing from body'
   },
   website: {
      in: ['body'],
      errorMessage: 'University website is missing from body'
   },
   year: {
      in: ['body'],
      errorMessage: 'University year is missing from body'
   },
   faculties: {
      in: ['body'],
      errorMessage: 'University number of faculties is missing from body'
   },
   students: {
      in: ['body'],
      errorMessage: 'University number of students is missing from body'
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