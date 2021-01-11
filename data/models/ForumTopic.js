const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForumTopicSchema = new Schema({
   name: {
      type: String,
      required: true
   }, 
   forum: {
      type: Schema.Types.ObjectId,
      ref: 'Forum',
      required: true
   },
}, { timestamps: true });

const ForumTopicModel = mongoose.model('ForumTopic', ForumTopicSchema, 'forumtopics');

module.exports = ForumTopicModel;
