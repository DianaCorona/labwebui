import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  chat: DS.belongsTo('chat'),
  user2: DS.belongsTo('user')
});
