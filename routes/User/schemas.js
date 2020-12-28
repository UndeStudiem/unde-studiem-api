
const authSchema = {
   username: {
      in: ['body'],
      errorMessage: 'Username is missing from body',
      matches: '[a-zA-Z0-9_\.\-]'
   },
   password: {
      in: ['body'],
      errorMessage: 'Password is missing from body',
      isLength: {
         options: {
            min: 8,
            max: 28
         }
      },
   }
};

module.exports = {
   authSchema
}