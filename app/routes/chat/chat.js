import Ember from 'ember';

export default Ember.Route.extend({
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
    // socket.on('newMessage', (data)=>{ if(data.chatId == chat.get('id')){ this.store.pushPayload('message', data.message);}})
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
