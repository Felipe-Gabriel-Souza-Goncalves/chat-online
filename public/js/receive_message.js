
const div_mensagens = document.getElementById("div_mensagens")

socket.on("nova_mensagem", (data) =>{
  console.log("no nova_mensagem "+ data.mensagem)

  const msg = data.mensagem

  const msgElement = document.createElement("p")
  msgElement.innerText = msg
  
  div_mensagens.appendChild(msgElement)
})