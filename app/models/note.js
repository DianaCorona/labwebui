import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  message: DS.attr('string'),
	expDate: DS.attr('string'),
  group_id: DS.attr('string'),
});
