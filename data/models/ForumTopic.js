const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForumTopicSchema = new Schema({
   title: {
      type: String,
      required: true
   }, 
   forum: {
      type: Schema.Types.ObjectId,
      ref: 'Forum',
      required: true
   },
}, { timestamps: true });

const ForumTopicModel = mongoose.model('ForumTopic', ForumTopicSchema);

module.exports = ForumTopicModel;
