const express = require("express");
const {notFoundedRequest, errorRoute} = require("./routes/errorHandles");
const index = require("./routes/index")
const port = 3000
const server = express()
server.use(express.json()) // Transformar em json
server.use(express.urlencoded({ extended: true })) //Receber valores em string e array

server.use('/', index);

// server.use();  verificar se existe alguma rota
server.use(errorRoute); // Retorna erros do servidor.
server.use(notFoundedRequest); // Retorna erros do servidor.
server.listen(port, () => [
    console.log("executando na porta:", port)
])