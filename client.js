 
var io = require("socket.io-client")("http://10.0.0.8:3000");
//var socket = io();
 /*     $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
      });*/
     var readline = require("readline");
     var rl = readline.createInterface({
	     input:process.stdin,
	     terminal:false,
	     output:process.stdout
     });
     var i = 0;
     var name="";
     console.log("name:")
     rl.on("line", function(ln) {
	     i++;
	     if (i>1) {
	     	io.emit("my other event", name+": "+ln);
	     } else {
	     	name=ln;
	     }

     });
     	io.on("news", function(dat) {
		console.log("chatted:",dat);
      //io.emit("my other event","I loged on");
		});

