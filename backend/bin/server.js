'use strict'

const app = require('../src/app')
const http = require('http')
const debug = require('debug')

const port = normalizaPorta(process.env.PORT || '3000');
app.set('port', port)

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`A API esta rodando na porta ${port}`)

// normalizando a porta
function normalizaPorta(valor) {
    const porta = parseInt(valor, 10);

    if (isNaN(porta)) {
        return porta
    }

    if (porta >= 0) {
        return porta;
    }

    return false;
}

// erro do servidor
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// pega as info do server e start o debug
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}