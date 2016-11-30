import Ember from 'ember';

export default Ember.Route.extend({

  model(segmento){

    //let name= this.modelFor('application').get('email')
let identificador=segmento.group_id


 //return this.store.findRecord('listg', identificador)

 return Ember.RSVP.hash({

   grupos: this.store.findRecord('listg', identificador),
      usuarios: this.store.findAll('user'),
  });



  //  this.router.get('listg').reload().then(function(){
  //    return this.store.findRecord('listg', identificador)
  //  })
    //return this.get('store').query('listg',)


 },
 actions:{
   editar(model){
     model.grupos.save().then(()=>{
     }).catch(()=>{
     });
   },


 }
});
