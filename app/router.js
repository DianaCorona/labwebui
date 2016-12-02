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
  this.route('login', {path: '/login'});
  this.route('groups', {path: '/groups'});
  this.route('editGroup', {path: '/editGroup/:group_id'});
  this.route('chats', {path: '/chats'}, function() {
      this.route('index', {path: '/'});
      this.route('chat', {path: '/:id'});
  });
  this.route('note', { path: '/notas' }, function() {
    this.route('new', {path: 'new/:group_id'});
    this.route('index', {path: 'index'});
    this.route('edit', {path: '/editNote/:note_id'});
  });
  
});

export default Router;
//

// grupos = GroupList.where(:id => u_id).all
//ember s --proxy http://7ef12ff6.ngrok.io
