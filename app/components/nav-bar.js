import Ember from 'ember';
import inject from 'ember-service/inject';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Component.extend(AuthenticatedRouteMixin,{
	session: inject(),
	tagName: 'nav',
	classNames: "navbar navbar-default",

	actions: {
		logout() {
			this.get('session').invalidate();
		}
	},
});
