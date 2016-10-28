import Ember from 'ember';
import inject from 'ember-service/inject';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: inject(),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
