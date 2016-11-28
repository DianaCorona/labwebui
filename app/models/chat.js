import DS from 'ember-data';

export default DS.Model.extend({
  messages:  DS.hasMany('message'),
  users: DS.hasMany('user')
});
