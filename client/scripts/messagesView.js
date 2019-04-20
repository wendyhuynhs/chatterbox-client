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

    // setInterval(function () {
    //   window.location.href = window.location.href;
    // }, 50000);

    return MessageView.render(data)
  }
  

};

