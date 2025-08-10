
// Importar o módulo express
const express = require('express');

const app = express();

// Importar o módulo http e criar um servidor
const http = require('http').createServer(app);

// Importar o módulo socket e adicionar o servidor http
const io = require('socket.io')(http);

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public')); // Isso vai permitir servir a pasta "public" para imagens, css, etc.

// Rota para página principal
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

// Evento quando o cliente se conecta ao servidor 
io.on('connection', (socket) => {


    // Evento para cliente envia mensagem
    socket.on('envio_mensagem', (data) => {
        if(data.current_room == undefined){
            console.log("Nenhuma sala definida")
            return
        }

        console.log("no envio_mensagem "+ data.mensagem)
        console.log(data.current_room)
        io.to(data.current_room).emit('nova_mensagem', {mensagem: data.mensagem })
    })

    socket.on('new_room', (data) => {
        console.log("current_room: "+data.current_room)
        socket.join(data.code)
    })

    socket.on('change_room', (data) =>{
        console.log("entrando na sala "+ data.code)
        socket.leave(data.current_room)
        socket.join(data.code)
    })


    // Evento para o cliente se desconecta do servidor
    socket.on('disconnect', () => console.log('Usuário desconectado'))
})

// Iniciar o servidor na porta 3000
http.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 - Link http://localhost:3000')
})