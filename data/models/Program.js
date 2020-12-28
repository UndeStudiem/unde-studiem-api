const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   college: {
      type: Schema.Types.ObjectId,
      ref: 'College',
      required: true
   },
   degree: {
      type: String,
      enum: ['Associate', 'Bachelor', 'Master', 'Doctoral'],
      require: true
   },
   field: {
      type: String,
      require: true
   }
}, { timestamps: true });

const ProgramModel = mongoose.model('Program', ProgramSchema);

module.exports = ProgramModel;
