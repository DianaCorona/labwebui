import DS from 'ember-data';

export default DS.Model.extend({
  messages:  DS.hasMany('message'),
  group: DS.belongsTo('group')
});
