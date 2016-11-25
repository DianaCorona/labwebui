import RESTAdapter from 'ember-data/adapters/rest';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default RESTAdapter.extend(DataAdapterMixin,{

	authorizer: 'authorizer:devise',
   urlForFindAll(){

     return `groups/${'1'}`;
   },
	urlForDeleteRecord(id){
		return `groups/${id}/borrar`;
	 },
	 urlForDeleteRecord(idg,idu){

		 return `/group_list/${id_g}/${id_u}`
	 },

   urlForFindRecord(id){

     return `/group_list/${id}`;
   },


	 urlForUpdateRecord(id, modelName, snapshot){
		 return `/group_list/${id}`;
	 }
});
