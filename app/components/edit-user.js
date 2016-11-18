import Ember from 'ember';

export default Ember.Component.extend({
	isEditing: false,
	user: null,
	actions:{
		enterEditMode(){
			this.set('isEditing', true);
		},
		saveUser(user){
			this.get('editUser')(user);
			this.set('isEditing', false);
		},
		cancel(user){
			this.get('cancel')(user);
			this.set('isEditing', false);
		},
		cancelAccount(user){
			this.get('cancelAccount')(user);			
		}
	}
});
