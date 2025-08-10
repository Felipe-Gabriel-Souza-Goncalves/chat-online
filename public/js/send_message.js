
const form_mensagem = document.getElementById("form_mensagem") 
const input_mensagem = document.getElementById("input_mensagem")

form_mensagem.addEventListener("submit", (e) =>{
  e.preventDefault()
  
  const mensagem = input_mensagem.value
  if(!mensagem) return

  socket.emit("envio_mensagem", { mensagem })
})