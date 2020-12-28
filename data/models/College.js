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
}, { timestamps: true });

const CollegeModel = mongoose.model('College', CollegeSchema);

module.exports = CollegeModel;
