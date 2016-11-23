import Ember from 'ember';

export default Ember.Route.extend({
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
    // socket.on('newMessage', (data)=>{ if(data.chatId == chat.get('id')){ this.store.pushPayload('message', data.message);}})
  },

  _buildMessage(){
    return this.store.createRecord('message', {
      chat: this.modelFor('chat')
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
