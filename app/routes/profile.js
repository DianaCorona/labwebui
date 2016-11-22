import Ember from 'ember';
import inject from 'ember-service/inject';

export default Ember.Route.extend({
  session: inject(),
	model(){
  		return this.modelFor('application');
  	},		
  	actions:{
  		editUser(model){
  			model.save().then(()=>{
  			}).catch(()=>{
  			});
  		},
      rollbackUser(user){
        user.rollbackAttributes();
      },
      cancelAccount(user) {
        alert('La cuenta se va a eliminar');
        let promise = user.destroyRecord();        
        promise.then((response)=>{
          this.get('session').invalidate();
        }).catch(()=>{
          alert('No se pudo eliminar');
        });
      }

  	}
});
