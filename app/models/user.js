import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  apellido: DS.attr('string'),
  password: DS.attr('string'),
  email: DS.attr('string'),
  nickname: DS.attr('string'),
  password_confirmation: DS.attr('string'),

//  User2.create(email:"pats@gmail.com", nickname:"pats", password:"Pats123", password_confirmation:"Pats123")
});
