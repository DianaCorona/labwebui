import Ember from 'ember';

export default Ember.Route.extend({

  model(segmento){

let identificador=segmento.group_id

 return Ember.RSVP.hash({

   grupos: this.store.findRecord('listg', identificador),
      usuarios: this.store.findAll('user'),
  });

 },
 actions:{
   editar(model){
     model.grupos.save().then(()=>{
     }).catch(()=>{
     });
   },


<<<<<<< HEAD
 },

=======
 }
>>>>>>> 066b16d60778a2eaa0278785f723e9d2ad87cb64
});
