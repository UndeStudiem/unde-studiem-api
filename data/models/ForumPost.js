const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForumPostSchema = new Schema({
   universityOpinion: {
      type: String,
      required: true
   },
   programOpinion: {
      type: String,
      required: true
   },
   authorName: {
      type: String
   },
   authorAge: {
      type: Number,
      required: true
   },
   authorGender: {
      type: String,
      enum: ['F', 'M']
   },
   program: {
      type: Schema.Types.ObjectId,
      ref: 'Program',
      required: true
   },
   university: {
      type: Schema.Types.ObjectId,
      ref: 'University'
   },
   college: {
      type: Schema.Types.ObjectId,
      ref: 'College'
   },
   promotionYear: {
      type: Number
   },
   programStarGrade: {
     type: Number,
     required: true
   },
   timestamp: {
      type: String
   }
}, { timestamps: true });

const ForumPostModel = mongoose.model('ForumPost', ForumPostSchema);

module.exports = ForumPostModel;
