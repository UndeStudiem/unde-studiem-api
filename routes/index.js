const UserController = require('./User/controllers.js');
const UniversityController = require('./University/controllers.js');
const CollegeController = require('./College/controllers.js');
const ProgramController = require('./Program/controllers.js');
const ForumController = require('./Forum/controllers.js');
const ForumTopicController = require('./ForumTopic/controllers.js');
const ForumPostController = require('./ForumPost/controllers.js');
const ReviewController = require('./Review/controllers.js');

const Router = require('express')();

Router.use('/auth', UserController);
Router.use('/university', UniversityController);
Router.use('/college', CollegeController);
Router.use('/program', ProgramController);
Router.use('/forum', ForumController);
Router.use('/topic', ForumTopicController);
Router.use('/post', ForumPostController);
Router.use('/review', ReviewController);


module.exports = Router;