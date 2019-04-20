var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    for (var i = 0; i < Messages.result.length; i++) {
      MessagesView.$chats.append(MessagesView.renderMessage(Messages.result[i]))
    }
  },

  renderMessage: function(data) {
    if (data.username === undefined) {
      data.username = '';
    }
    if (data.text === undefined) {
      data.text = ''
    }
    // console.log(data.username)
    return MessageView.render(data)
  }

};

