var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var input = $('input:text').val()

    var message = {
      username: App.username,
      text: input,
      roomname: RoomsView.roomname
    }

    Parse.create(message, function () {
      Messages.result.push(message);
      MessagesView.$chats.prepend(MessageView.render(message));
    })

    setInterval(function () {
      window.location.href = window.location.href;
    }, 500);

  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};