import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service('ajax'),
  actions:{

    anexar(id_gr, id_us){

      this.get('ajax').post('group_list/', {data: {id_u: id_us, id_g: id_gr   }} )
      alert('Usuario Creado');
    },

  },

});
