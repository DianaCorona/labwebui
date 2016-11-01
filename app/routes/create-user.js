import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    nuevo(model){
      debugger
      model.save().then(function() {
        console.log('si se pudo');
  // Success callback
}, function() {
  console.log(model);
  debugger
});
    }
  },

  model () {
    return this.store.createRecord('user');
  }
});
