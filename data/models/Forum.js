const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForumSchema = new Schema({
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

const ForumModel = mongoose.model('Forum', ForumSchema);

module.exports = ForumModel;
