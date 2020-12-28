const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
   name: {
      type: String,
      required: true
   },
   country: {
      type: String,
      required: true
   },
   city: {
      type: String,
      required: true
   }
}, { timestamps: true });

const UniversityModel = mongoose.model('University', UniversitySchema);

module.exports = UniversityModel;
