const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
   },
   email: {
      type: String,
      require: true
   }
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
