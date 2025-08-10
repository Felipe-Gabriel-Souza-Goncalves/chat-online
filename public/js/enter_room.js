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

  if(!document.querySelector(`div[onclick="enterRoom(${roomCode})"]`)){
    const element_room = document.createElement("div")
    element_room.setAttribute("onclick", `enterRoom(${roomCode})`)
    
    const name = document.createElement("strong")
    name.innerText = roomCode

    const description = document.createElement("p")
    description.innerText = "Sala interativa"

    element_room.appendChild(name)
    element_room.appendChild(description)

    document.getElementById("meus_chats").appendChild(element_room)
  }
}