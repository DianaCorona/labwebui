import Ember from 'ember';
import inject from 'ember-service/inject';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin,{

  aftermodel(){
    return this.modelFor('application');
  },

  model(segmento){
    debugger;
    let grupo = segmento.group_id;
      return this.store.createRecord('note',{
        group_id: grupo,
      });
  },

	actions:{
		createNote(model){//debugger
			model.save().then(()=>{
        alert('Us')
			}).catch(()=>{
      });
		}
	}
});
