import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    let socket = io('localhost:5000'); //todo funciona sobre la variable global io
    socket.on('connect', ()=>{
      console.log('socket connect');
    }); //va a escuchar un evento al que se le ponga on
    this.set('socket',socket); //lo pueda guardar fuera de la ruta
    //debe coincidir con el localhost del app.js
  },


  model(params){
    return this.store.find('chat', params.id)
  },

  setupController(c, m){
    this._super(...arguments);
    let socket = io('localhost:5000');
    let chat = this.modelFor('chats.chat');
    let user = this.modelFor('application');
    let message = this.modelFor('message.id');
    c.set('newMessage', this._buildMessage());
    c.set('user', user);
    // Escuchar al socket
    socket.on('newMessage', (data)=>{
      debugger;
       if(data.message.chat_id == chat.get('id')){
         //message.pushObject(data.message);
         this.store.pushPayload('message', data);
       }
     })
  },

  _buildMessage(){

    return this.store.createRecord('message', {
      chat: this.modelFor('chats.chat'),
      user2: this.modelFor('application')
    })
  },

  actions: {
    sendMessage(){
      let socket = io('localhost:5000');
      let newMessage = this.controller.get('newMessage');
      console.log('hola');

      newMessage.save().then((message)=>{
        // Enviar mensaje al socket


        this.controller.set('newMessage', this._buildMessage());


        socket.emit('newMessage', { chatId: message.get('id'), message: message.serialize({includeId: true}) })
      });

    }
  }
});
