import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import service from 'ember-service/inject';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: service(),

  model(){
    if (this.get('session.isAuthenticated')){
      return this.store.findRecord('user', 'me')
    } else {
      this.transitionTo('login');
    }
  }
});
