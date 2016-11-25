import Ember from 'ember';

export default Ember.TextField.extend({
	onDidInsertElement: function(){
		this.$().datetimepicker({
			format: 'YYYY-MM-DD'
		});
	}.on('didInsertElement')
});
