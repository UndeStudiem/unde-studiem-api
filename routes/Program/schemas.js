
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
      errorMessage: 'Program degree is missing from body',
   },
   language: {
      in: ['body'],
      errorMessage: 'Program language is missing from body',
   },
   type: {
      in: ['body'],
      errorMessage: 'Program type is missing from body',
   },
   accredited: {
      in: ['body'],
      errorMessage: 'Program accredited missing from body',
   },
   duration: {
      in: ['body'],
      errorMessage: 'Program duration is missing from body',
   },
   organization: {
      in: ['body'],
      errorMessage: 'Program organization is missing from body',
   },
   credits: {
      in: ['body'],
      errorMessage: 'Program credits is missing from body',
   },
   totalPlaces: {
      in: ['body'],
      errorMessage: 'Program totalPlaces is missing from body',
   },
   taxFreePlaces: {
      in: ['body'],
      errorMessage: 'Program taxFreePlaces is missing from body',
   },
   taxPlaces: {
      in: ['body'],
      errorMessage: 'Program taxPlaces is missing from body',
   },
   admissionType: {
      in: ['body'],
      errorMessage: 'Program admissionType is missing from body',
   },
   tax: {
      in: ['body'],
      errorMessage: 'Program tax is missing from body'
   },
   courses: {
      in: ['body'],
      errorMessage: 'Program courses is missing from body',
   },
   competencies: {
      in: ['body'],
      errorMessage: 'Program competencies is missing from body',
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