const new_code_room = document.getElementById("test_create_room")

function createRoom(){
  if(!new_code_room.value) return
  createElementRoom(new_code_room.value)  

  socket.emit("new_room", {
    code: new_code_room.value,
    current_room: current_room
  })

  current_room = new_code_room.value
  
}