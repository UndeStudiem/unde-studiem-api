const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
   text: {
      type: String,
      required: true,
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
   score: {
      type: Number,
      required: true,
      min: [1, 'Scores lower than 1 are not allowed'],
      max: [10, 'Scores larger than 10 are not allowed'],
      validate: {
         validator: Number.isInteger,
         message: '{VALUE} is not an integer value'
      }
   }
}, { timestamps: true });

const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;
