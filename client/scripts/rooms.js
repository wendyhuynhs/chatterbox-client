var Rooms = {
  roomsList: [],
  add: function(room) {
    if (typeof room === 'object') {
      if (!Rooms.roomsList.includes(room.roomname)) {
        RoomsView.renderRoom(room);
        Rooms.roomsList.push(room.roomname);
      }
    } else {
      if (!Rooms.roomsList.includes(room)) {
        Rooms.roomsList.push(room);
        RoomsView.renderRoom(room);
      }
    }
  }
};
