var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    for (var i = 0; i < Messages.result.length; i++) {
      MessagesView.$chats.append(MessagesView.renderMessage(Messages.result[i]))
    }
  },

  renderMessage: function(data) {
    return MessageView.render(data)
  }

};

