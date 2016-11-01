import Ember from 'ember';

export default Ember.Route.extend({
	model(){
  		return this.modelFor('application');
  	},
  	actions:{
  		editUser(model){
  			model.save().then(()=>{
  				this.transitionTo('home');
  			}).catch(()=>{

  			});
  		}
  	}
});
