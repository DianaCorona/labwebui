import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),
  headers: Ember.computed('session.authToken', {
    get() {
      let headers = {};
      const authToken = this.get('session.authToken');
      this.get('session').authorize('authorizer:devise', (headerName, headerValue) => {
         headers[headerName] = headerValue;
      });
      return headers;
    }
  })
});
