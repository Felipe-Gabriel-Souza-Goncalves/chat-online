const new_code_room = document.getElementById("test_create_room")

function createRoom(){
  if(!new_code_room.value) return
  
  const element_room = document.createElement("div")
  element_room.setAttribute("onclick", `enterRoom('${new_code_room.value}')`)
  
  const name = document.createElement("strong")
  name.innerText = new_code_room.value

  const description = document.createElement("p")
  description.innerText = "Sala interativa"

  element_room.appendChild(name)
  element_room.appendChild(description)

  document.getElementById("meus_chats").appendChild(element_room)

  socket.emit("new_room", {
    code: new_code_room.value,
    current_room: current_room
  })

  current_room = new_code_room.value
  
}