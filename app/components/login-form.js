import Ember from 'ember';
import inject from 'ember-service/inject';

export default Ember.Component.extend({
  session: inject(),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
