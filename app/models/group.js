import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  expDate: DS.attr('string'),
  id_user: DS.attr('string'),
  user: DS.hasMany('user')

});
