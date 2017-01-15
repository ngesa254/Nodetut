
/*
  Dance Hall Demo with J5
  
  This example code is in the public domain.

  modified 10 Jan 2017
  by Ngesa N Marvin
*/

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var array = new five.Leds([3, 5, 6]);

  array.pulse();
});