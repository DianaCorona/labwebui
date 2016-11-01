import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
	urlForCreateRecord(){
		return "/users/create";
	}
});
