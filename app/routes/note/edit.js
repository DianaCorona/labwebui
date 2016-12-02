import Ember from 'ember';

export default Ember.Route.extend({
    model(segmento){
      debugger;
      let identificador = segmento.id;
        return this.store.findRecord('note',{
          id: identificador,
        });
    },

  	actions:{
  		editNote(model){//debugger
        let id=this.get('idn');
  			model.save(id).then(()=>{
          alert('Us')
  			}).catch(()=>{
        });
  		}
  	}
});
