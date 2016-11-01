import RESTAdapter from 'ember-data/adapters/rest';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
export default RESTAdapter.extend(DataAdapterMixin,{
	authorizer: 'authorizer:devise',
	urlForCreateRecord(){
		return `/users/create`;
	}, 
	urlForUpdateRecord(id){
		return `/users/${id}/update`
	}
});
