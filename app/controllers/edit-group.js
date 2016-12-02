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

	tasksCountLabel: Ember.computed('query', function(){
		let modelLength = this.get('model.usuarios');
		let filteredModelLength = this.get('filteredModel.length');
		let query = this.get('query');
		debugger;
		if(!query){ return `${modelLength.get('length')} Usuarios Disponbles`; }
		else{
			if( filteredModelLength === 0){
				return `No Encontrado "${query}"`;
			}else{
				return `${filteredModelLength} of ${modelLength.get('length')} Usuarios Disponbles`;
			}
		}
	}),

});
