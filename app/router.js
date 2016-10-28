import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('createUser', {path: '/newUser'});
  this.route('home', {path: '/'});
  this.route('profile', {path: '/profile'});
  this.route('group', {path: '/group'});
});

export default Router;
