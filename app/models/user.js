import DS from 'ember-data';

export default DS.Model.extend({
	nickname: DS.attr('string'),
	name: DS.attr('string'),
	lastName: DS.attr('string'),
	birthday: DS.attr('string'),
	phone: DS.attr('string'),
	email: DS.attr('string'),
    password: DS.attr('string'),
    chat: DS.hasMany('chat'),
    group: DS.hasMany('group'),
    message: DS.hasMany('message')

});
