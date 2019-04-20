var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //render rooms that are in select
    // for (var i = 0; i < Messages.result.length; i++) {
      RoomsView.$select.append(RoomsView.renderRoom())
    // }
  },


  renderRoom: function(data) {
    // if (data.roomname === undefined) {
    //   data.roomname = '';
    // }
  //  return RoomsView.(data.roomname)
  // }
  RoomsView.$button.on('click', function () {
    var input = $('input:text').val()
      RoomsView.$select.append(`<option value="${input}" > ${input} </option>`)
  })
  }

};
