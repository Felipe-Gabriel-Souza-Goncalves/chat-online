// Importar o módulo express
const socket = io();
let current_room = undefined

function createElementRoom(roomCode = null){
  if(roomCode == null){
    roomCode = new_code_room.value
  }
  
  const element_room = document.createElement("div")
  element_room.setAttribute("onclick", `enterRoom('${roomCode}')`)
  
  const name = document.createElement("strong")
  name.innerText = new_code_room.value

  const description = document.createElement("p")
  description.innerText = "Sala interativa"

  element_room.appendChild(name)
  element_room.appendChild(description)

  document.getElementById("meus_chats").appendChild(element_room)

}