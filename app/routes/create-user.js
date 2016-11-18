import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('user');
	},
	actions:{
		createUser(model){
			model.save().then(()=>{
				alert('Listo!, Inicia sesión :)');
				this.transitionTo('login');
			}).catch(()=>{

			});
		}
	}
});
