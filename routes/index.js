import UserController from '../User/controllers.js';
import UniversityController from '../University/controllers.js';
import CollegeController from '../College/controllers.js';
import ProgramController from '../Program/controllers.js';
import ForumController from '../Forum/controllers.js';
import ForumTopicController from '../ForumTopic/controllers.js';
import ForumPostController from '../ForumPost/controllers.js';
import ReviewController from '../Review/controllers.js';

const Router = require('express')();

Router.use('/auth', UserController);
Router.use('/university', UniversityController);
Router.use('/college', CollegeController);
Router.use('/program', ProgramController);
Router.use('/forum', ForumController);
Router.use('/topic', ForumTopicController);
Router.use('/post', ForumPostController);
Router.use('/review', ReviewController);


export default Router;