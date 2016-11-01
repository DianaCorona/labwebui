import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
	exp_date: DS.attr('string'),
  id_user: DS.attr('string')
});
