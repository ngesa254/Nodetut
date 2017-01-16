



var five = require('johnny-five');
var BeagleBone = require('beaglebone-io');

var board = new five.Board({
  io: new BeagleBone()
});

board.on('ready', function () {
  
//do awesome

});
