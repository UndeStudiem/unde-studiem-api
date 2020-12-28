const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.MUSER}:${process.env.MPASSWORD}@${process.env.MHOST}:${process.env.MPORT}/${process.env.MDATABASE}?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  } catch (e) {
    console.trace(e);
  }
})();

const User = require('./models/User.js');
const University = require('./models/University.js');
const College = require('./models/College.js');
const Program = require('./models/Program.js');
const Forum = require('./models/Forum.js');
const ForumTopic = require('./models/ForumTopic.js');
const ForumPost = require('./models/ForumPost.js');
const Review = require('./models/Review.js');

module.exports = {
  User,
  University,
  College,
  Program,
  Forum,
  ForumTopic,
  ForumPost,
  Review
}