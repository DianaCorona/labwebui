import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< .merge_file_NvMYFb
  this.route('createUser', {path: '/newUser'});
  this.route('home', {path: '/'});
  this.route('profile', {path: '/profile'});
  this.route('group', {path: '/group'});
=======
  this.route('login');

  this.route('home', {path: '/'});
  this.route('profile', {path: '/profile'});
>>>>>>> .merge_file_LY84Dc
});

export default Router;
