import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
      let socket = io('http://localhost:5000'); //todo funciona sobre la variable global io
      socket.on('connect', ()=>{
        console.log('socket connect');
      }); //va a escuchar un evento al que se le ponga on
      this.set('socket',socket); //lo pueda guardar fuera de la ruta
      //debe coincidir con el localhost del app.js
    },

  model(){
    let chat = this.modelFor('chat');
    return this.store.filter('message', {chat_id: chat.get('id')}, (message)=>{
      return message.get('chat.id') == chat.get('id') && !message.get('isNew');
    });
  },

  setupController(c, m){
    this._super(...arguments);
    let chat = this.modelFor('chat');
    c.set('newMessage', this._buildMessage());
    // Escuchar al socket
     socket.on('newMessage', (data)=>{ if(data.chatId == chat.get('id')){ this.store.pushPayload('message', data.message);}})
  },

  _buildMessage(){
    return this.store.createRecord('message', {
      chat: this.modelFor('chat')
    })
  },

  actions: {
    sendMessage(){

      let newMessage = this.controller.get('message');

      newMessage.save().then((message)=>{
        // Enviar mensaje al socket
        console.log('hola');
         socket.emit('newMessage', { chatId: message.get('chat.id'), message: message.serialize({includeId: true}) })
        this.controller.set('newMessage', this._buildMessage());
      });

    }
  }
});
