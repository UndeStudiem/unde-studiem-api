
const programSchema = {
   name: {
      in: ['body'],
      errorMessage: 'Program name is missing from body',
      matches: '[a-zA-Z0-9_\.\-]',
      isLength: {
         options: {
            max: 100
         }
      },
   },
   collegeId: {
      in: ['body'],
      errorMessage: 'College Id is missing from body',
      matches: '^[0-9a-fA-F]{24}$',
   },
   degree: {
      in: ['body'],
      errorMessage: 'Prgram degree is missing from body',
   },
   language: {
      in: ['body'],
      errorMessage: 'Prgram language is missing from body',
   },
   type: {
      in: ['body'],
      errorMessage: 'Prgram type is missing from body',
   },
   accredited: {
      in: ['body'],
      errorMessage: 'Prgram accredited missing from body',
   },
   duration: {
      in: ['body'],
      errorMessage: 'Prgram duration is missing from body',
   },
   organization: {
      in: ['body'],
      errorMessage: 'Prgram organization is missing from body',
   },
   credits: {
      in: ['body'],
      errorMessage: 'Prgram credits is missing from body',
   },
   totalPlaces: {
      in: ['body'],
      errorMessage: 'Prgram totalPlaces is missing from body',
   },
   taxFreePlaces: {
      in: ['body'],
      errorMessage: 'Prgram taxFreePlaces is missing from body',
   },
   taxPlaces: {
      in: ['body'],
      errorMessage: 'Prgram taxPlaces is missing from body',
   },
   admissionType: {
      in: ['body'],
      errorMessage: 'Prgram admissionType is missing from body',
   },
   courses: {
      in: ['body'],
      errorMessage: 'Prgram courses is missing from body',
   },
   competencies: {
      in: ['body'],
      errorMessage: 'Prgram competencies is missing from body',
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
   programSchema,
   querySchema
}