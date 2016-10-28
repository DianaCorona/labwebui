import Ember from 'ember';



export default Ember.Route.extend({
let ajax: Ember.inject.service('ajax');

model:function(parametro){

  let promise= this.get('ajax').request('http://localhost:3000/users');
    //ember esperara a que se complete la promise
    return promise;

}



});
