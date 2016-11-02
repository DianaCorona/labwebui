import Ember from 'ember';
import inject from 'ember-service/inject';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin,{

  aftermodel(){
    return this.modelFor('application');
  },


    model(){
        return Ember.RSVP.hash({
          me: this.modelFor('application'),
          group: this.store.createRecord('group',{
            id_user: this.modelFor('application').get('email'),
          })
         });
      },

	actions:{
		createGroup(model){

			model.group.save().then(()=>{
        alert('Us')
			}).catch(()=>{

			});
		}
	}
});
