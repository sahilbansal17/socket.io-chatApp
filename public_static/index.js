var socket = io(); // assume that socket from the server which loaded the page
$(function(){
    var msg = $('#msg');
    var sendBtn = $('#send');
    var chat = $('#chat');

    sendBtn.click(function(){
        socket.emit('new_msg',msg.val()); // event emitted to server
    })
    socket.on('msg',function(data){
        chat.append("<li>"+data+"</li>");
    })
})