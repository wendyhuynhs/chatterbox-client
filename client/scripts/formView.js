var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    event.preventDefault();

    var message = {
      username: App.username,
      text: $('input:text').val(),
      roomname: ''
    }
    
    Parse.create((message) => {
      MessagesView.$chats.prepend(MessageView.render(message));

    })


  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};