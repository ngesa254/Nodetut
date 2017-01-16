/*
  Blink
  
  This example code is in the public domain.

  modified 1 Jan 2017
  by Ngesa N Marvin
*/

var five = require('johnny-five');
var BeagleBone = require('beaglebone-io');

var board = new five.Board({ 
  io: new BeagleBone()
});

board.on('ready', function () {
  var led = new five.Led();
  led.blink();

  this.repl.inject({ led: led });
});
