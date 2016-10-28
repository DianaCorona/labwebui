import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: 'http://dianacorona8903.cloudapp.net:3000/user2/sign_in',
  resourceName: 'user2'
});
