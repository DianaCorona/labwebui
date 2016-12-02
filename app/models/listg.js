import DS from 'ember-data';

export default DS.Model.extend({
  // user_id: DS.attr('string'),
  // group_id: DS.attr('string'),
  name: DS.attr('string'),
  exp_date: DS.attr('string'),
});
