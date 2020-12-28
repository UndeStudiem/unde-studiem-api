const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForumPostSchema = new Schema({
   text: {
      type: String,
      required: true
   },
   author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   topic: {
      type: Schema.Types.ObjectId,
      ref: 'ForumTopic',
      required: true
   },
}, { timestamps: true });

const ForumPostModel = mongoose.model('ForumPost', ForumPostSchema);

module.exports = ForumPostModel;
