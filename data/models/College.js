const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   university: {
      type: Schema.Types.ObjectId,
      ref: 'University',
      required: true
   },
   description: {
      type: String,
      required: true
   },
   graduateRate: {
      type: String
   },
   employabilityRate: {
      type: String
   },
   studentOrganizations:{
      type: String
   },
   partnerships: {
      type: String
   },
   accommodationType: {
      type: String
   },
   otherFacilities: {
      type: String
   }
}, { timestamps: true });

const CollegeModel = mongoose.model('College', CollegeSchema, 'colleges');

module.exports = CollegeModel;
