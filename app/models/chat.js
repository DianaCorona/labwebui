import DS from 'ember-data';

export default DS.Model.extend({
  messages:  DS.hasMany('message'),
  members: DS.hasMany('chatMember')
});
