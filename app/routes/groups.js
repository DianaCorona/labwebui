import Ember from 'ember';
import inject from 'ember-service/inject';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin,{
  ajax: Ember.inject.service('ajax'),

actions:{
  eliminar(item){
    console.log('Soy el destroyTaskInController que llamó el Controller');
    let promise = item.destroyRecord();
  //  alert('Grupo eliminado');
    // this.transitionTo('groups');
  //  debugger;
  window.location.reload(true);

  },
},


    model(){

      //let name= this.modelFor('application').get('email')
      return this.store.findAll('listg')
      //return this.get('store').query('listg',)


   },


      // let promise= this.get('ajax').request('http://localhost:4200/groups/35');
      // return promise.then((response)=>{
      //   Ember.RSVP.hash({
      //    me: this.modelFor('application'),
      //    group: this.store.createRecord('groups',{
      //      name: response.group.name,
      //      group_id: response.group.id,
      //      user_id: this.modelFor('application').get('email'),
      //    })
      //   })
      // });


});
