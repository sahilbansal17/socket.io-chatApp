const express = require('express');
const app = express();
const http = require('http'); // module available in node.js, express also uses it
const server = http.Server(app); // http creates a server if called without parameter, but here it returns already created server in app object by express
const socketio = require('socket.io');
// getting the socket.io library
const io = socketio(server);
// pass the server on which you need to create socket, socket.io.js client side library is available on server just after this line of code
const path = require('path');


// request events are there similar to user events in js
io.on('connection',function(mysocket){
    // a client has to do atleast one request to start the socket!!
    console.log('a new connection has been created!');
    // at each connection (different clients request) a new mysocket will be created

})

app.use('/',express.static(path.join(__dirname,"/public_static")));

/* request part on app, don't use server.get
app.get('/',function(req,res){
    res.send("Sahil Bansal");
})
*/

// listen part on server
server.listen(8988,function(){
    console.log("server has started");
})