import RESTAdapter from 'ember-data/adapters/rest';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default RESTAdapter.extend(DataAdapterMixin,{
	authorizer: 'authorizer:devise',

	urlForCreateRecord(){
		return `/notes/create`;
	},
	urlForFindAll(){
		return `/notes`;
	},
	urlForDeleteRecord(id){
		return `/notes/${id}/borrar`;
	 },
	 urlForUpdateRecord(id){
 		return `/notes/${id}/update`;
 	},

});
