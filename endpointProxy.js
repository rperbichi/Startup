const {WebSocketServer} = require('ws');
const uuid = require('uuid'); // this will be used by database

function endpointProxy(httpServer) {
    const wss = new WebSocketServer({noServer: true}); // we don't need to create a server
    httpServer.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });

    let prayerRequests = []; // creating variable to be updated by using the variable "connection" later on

    wss.on('connection', (ws) => {
        const connection = {id: uuid.v4(), alive: true, ws: ws}; // this will be used to store websocket 
        prayerRequests.push(connection); // adding each new prayer request to the list of prayer requests

        wss.on('message', function message(data) { // this will be used to send a message that a prayer request has been submitted
            prayerRequests.forEach((c) => { // going through each prayer requested currently stored in the prayerRequests variable
                if (c.id !== connection.id){
                    c.ws.send(data);
                }
            });
        });
        
        wss.on('close', () => {
            prayerRequests.findIndex((o, i) => { // o -> 
                if(o.id === connection.id) {
                    prayerRequests.splice(i, 1);
                    return true;
                }
            });
        });

        wss.on('pong', () => { // pong messages: sent by a WS server to a WS client
            connection.alive = true;
        });
    });

    setInterval(() => {
        prayerRequests.forEach((c) => {
            if(!c.alive) {
                c.ws.terminate();
            } else {
                c.alive = false;
                c.ws.ping();
            }
        });
    }, 10000);
}

module.exports = {endpointProxy};