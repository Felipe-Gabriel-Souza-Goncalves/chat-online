function enterRoom(roomCode = null, newCode = false){
  if(!roomCode && !newCode) return

  if(roomCode == null && newCode != false){
    roomCode = new_code_room.value
  }

  socket.emit("change_room", {
    code: roomCode,
    current_room: current_room
  })

  current_room = roomCode

  // if(newCode == false){
  //   createElementRoom(roomCode)
  // }
}