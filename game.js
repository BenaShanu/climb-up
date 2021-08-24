class Game
{
    constructor()
    {
      

  }

  getState()
  {
     var gameStateRef = database.ref('gameState');
     gameStateRef.on('value' , function(data){
       gameState = data.val();
     })
  }

 update(state)
 {
   database.ref('/').update({
         gameState : state
   });
 }

  start()
  {

    player = new Player();
    playerCount = player.getCount();
    form= new Form();
      form.display();

      zemo = createSprite(width/2 - 50 , height - 100);
      zemo.addImage(zemoImg);
      zemo.scale = 0.5 ; 

      zemino = createSprite(width/2 + 100 , height - 100 );
      zemino.addImage(zeminoImg);
      zemino.scale = 0.5;

      characters = [zemo , zemino];



  }


  handleElements()
  {
    form.hide();
  }

  play()
  {
    this.handleElements();
    Player.getPlayersInfo();

    if(allPlayers !== undefined)
    {
      image(sky , 0,-displayHeight*4,displayWidth, displayHeight*5);

      drawSprites();
    }
  }
}

  

  


