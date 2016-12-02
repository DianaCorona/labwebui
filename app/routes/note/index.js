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
      return this.store.findAll('note',{
        group_id: grupo,
      });
  },

	actions:{
    deleteNote(item){
      let promise = item.destroyRecord();
    //  alert('Grupo eliminado');
      // this.transitionTo('groups');
    window.location.reload(true);

    },
	}
});
