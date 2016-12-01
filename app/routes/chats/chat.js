import Ember from 'ember';

export default Ember.Route.extend({
  // beforeModel(){
  //   let socket = io('http://dianacorona8903.cloudapp.net:5000'); //todo funciona sobre la variable global io
  //   socket.on('connect', ()=>{
  //     console.log('socket connect');
  //   }); //va a escuchar un evento al que se le ponga on
  //   this.set('socket',socket); //lo pueda guardar fuera de la ruta
  //   //debe coincidir con el localhost del app.js
  // },


  model(params){
    return this.store.find('chat', params.id)
  },

  setupController(c, m){
    this._super(...arguments);
    let chat = this.modelFor('chat');
    let user = this.modelFor('application');
    c.set('newMessage', this._buildMessage());
    c.set('user', user);
    // Escuchar al socket
    // socket.on('newMessage', (data)=>{ if(data.id == chat.get('id')){ this.store.pushPayload('chat.message', data.message);}})
  },

  _buildMessage(){
    return this.store.createRecord('message', {
      chat: this.modelFor('chats.chat'),
      user2: this.modelFor('application')
    })
  },

  actions: {
    sendMessage(){
      let newMessage = this.controller.get('newMessage');
      newMessage.save().then((message)=>{
        // Enviar mensaje al socket
        // socket.emit('newMessage', { chatId: message.get('chat.id'), message: message.serialize({includeId: true}) })
        this.controller.set('newMessage', this._buildMessage());
      });

    }
  }
});
