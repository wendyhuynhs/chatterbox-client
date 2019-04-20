var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //render rooms that are in select
    for (var i = 0; i < Messages.result.length; i++) {
      RoomsView.$select.append(RoomsView.renderRoom(Messages.result[i]))
    }
  },

  renderRoom: function(data) {
    if (data.roomname === undefined) {
      data.roomname = '';
    }
   return RoomsView.render(data.roomname)
  }

};
