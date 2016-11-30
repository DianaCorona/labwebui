import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['view'],
  query: null,

  filteredModel: Ember.computed('query', function(){
    let query = this.get('query');
    let model = this.get('model.usuarios');
		let grupos = this.get('model.grupos');

    if(!query){ return null; }

    return model.filter(function(usuarios){
			if(usuarios.get('nickname')==null){

			}
			else{
	      return usuarios.get('nickname').toLowerCase().indexOf(query.toLowerCase()) != -1;
			}
    });
  }),

});
