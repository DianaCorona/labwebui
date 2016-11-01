import Ember from 'ember';

export default Ember.Route.extend({
  model () {
		return this.store.createRecord('group');
	},

	actions:{
		createGroup(model){
			model.save().then(()=>{

			}).catch(()=>{

			});
		}
	}
});
