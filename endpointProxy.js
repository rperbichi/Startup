const {WebSocketServer} = require('ws');
const uuid = require('uuid'); // this will be used by database

function endpointProxy(httpServer) {
    const wss = new WebSocketServer({noServer: true}); // we don't need to create a server
    httpServer.on('upgrade', (reques, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });

    let prayerRequests = []; // creating variable to be updated

    wss.on('connection', (ws) => {
        const requestedPrayer = {id: uuid.v4(), alive: true, ws: ws}; // this will be used to store websocket 
        prayerRequests.push(requestedPrayer); // adding each new prayer request to the list of prayer requests
    });

    wss.on('message', function message(data) { // this will be used to send a message that a prayer request has been submitted
        prayerRequests.forEach((p) {
            
        })
    })
}