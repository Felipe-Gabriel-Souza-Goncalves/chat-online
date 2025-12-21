class Room {
  static roomsCliente = []
  
  constructor(nome, codigo, senha) {
    this.nome = nome;
    this.codigo = codigo;
    this.senha = "";
    this.mensagens = [];
    this.userObrigatorio = false;

    Room.roomsCliente.push(this)
  }

  async addMessage(user, message) {
    if (this.userObrigatorio == true && !user) {
      return;
    }

    const agora = new Date();

    // Obriga 2 digitos minimos para cada (exceto ano)
    const opcoes = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Usa formato 24 horas
    };

    // Formata como "DD/MM/YYYY, HH:MM"
    const tempoFormatado = agora.toLocaleString("pt-br", opcoes);

    // ADICIONAR SOCKET DE ENVIO
    // 
    // 

    this.mensagens.push({
      id: "msg" + agora.getTime(),
      user: user,
      mensagem: message,
      horario: tempoFormatado
    })
  }

  async receiveMessage(id, user, message, horario) {
    const obj = {id, user, mensagem: message, horario}
    this.mensagens.push(obj)
  }

  updateFront(msg){
    if(!msg.mensagem || !msg.id){
      console.log("Objeto não possui Id ou Mensagem")
      return
    }

    const chat = document.getElementById("div_mensagens")
    chat.innerHTML = ""

    try {
      // this.mensagens.forEach(msg =>{
        const element = `
          <div class="mensagem_chat">
            <p class="info_mensagem"> ${msg.nome ? msg.nome : "Anonimo"} - ${msg.horario || "??:??"}"</p>
            <p class="conteudo_mensagem">
              ${msg.mensagem}
            </p>
          </div>
          `

        chat.innerHTML += element
      // })
    } catch (error) {
      
    }
  }
}