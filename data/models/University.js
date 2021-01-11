const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
   name: {
      type: String,
      required: true
   },
   shortname: {
      type: String,
      required: true
   },
   city: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   website: {
      type: String
   },
   year: {
      type: Number
   },
   faculties: {
      type: Number
   },
   students: {
      type: Number
   }

}, { timestamps: true });

const UniversityModel = mongoose.model('University', UniversitySchema, 'universities');

module.exports = UniversityModel;
