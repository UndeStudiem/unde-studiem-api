const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
   text: {
      type: String,
      required: true
   },
   author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   program: {
      type: Schema.Types.ObjectId,
      ref: 'Program',
      required: true
   },
}, { timestamps: true });

const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;
