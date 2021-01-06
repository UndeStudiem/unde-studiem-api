
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
   },
   description: {
      in: ['body'],
      errorMessage: 'College description is missing from body'
   },
   graduateRate: {
      in: ['body'],
      errorMessage: 'College graduateRate is missing from body'
   },
   employabilityRate: {
      in: ['body'],
      errorMessage: 'College employabilityRate is missing from body'
   },
   studentOrganizations: {
      in: ['body'],
      errorMessage: 'College StudentOrganizations is missing from body'
   },
   partnerships: {
      in: ['body'],
      errorMessage: 'College Partnerships is missing from body'
   },
   accommodationType: {
      in: ['body'],
      errorMessage: 'College accommodationType is missing from body'
   },
   otherFacilities: {
      in: ['body'],
      errorMessage: 'College otherFacilities is missing from body'
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