
const div_mensagens = document.getElementById("div_mensagens")

socket.on("nova_mensagem", (data) =>{

  const msg = data.mensagem

  const msgElement = document.createElement("p")
  msgElement.innerText = msg
  
  div_mensagens.appendChild(msgElement)
})