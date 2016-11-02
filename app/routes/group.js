import Ember from 'ember';

export default Ember.Route.extend({

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
