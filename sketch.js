var database;
var form;
var game;
var player;
var gamestate = 0;



function setup(){
  database = firebase.database();
  game = new Game()
  game.getstate()
  game.start()
  
}

function draw(){
  background("white");
  
    
}
