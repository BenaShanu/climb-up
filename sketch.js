// variables for images
var stone, sky, zemoImg , zeminoImg , mountain, heart, coin, cloud, logo;
var bgImg;
var database;
var player;
var form;
var gameState , playerCount;
var zemo , zemino;
var characters = [];
var allPlayers;

function preload()
{
//loading images
   stone= loadImage("Images/Stone.png");
   sky= loadImage("Images/Sky.png");
   zemoImg = loadImage("Images/Zemo.png");
   zeminoImg = loadImage("Images/Zemino.png");
   mountain= loadImage("Images/Mountain.png");
   heart= loadImage("Images/Heart.png");
   coin= loadImage("Images/Coin.png");
   cloud= loadImage("Images/Cloud.png");
   logo= loadImage("Images/logo.png");
   bgImg= loadImage("Images/BrickBackground.png");


   

}


function setup()
{
     createCanvas(windowWidth, windowHeight);

     database = firebase.database();
     game= new Game();
     game.getState();
     game.start();
     

}

function draw()
{
   background(bgImg);

   if(playerCount === 2)
   {
      game.update(1);
   }

   if(gameState ===1)
   {
      game.play();
     
   }
   
   

  
}   

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}

