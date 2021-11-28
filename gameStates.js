function gameStates(){
    
  if( gameState === PLAY){
    restart.visible=false
    gameover.visible=false
    if (ground.x<0){
      ground.x = ground.width/2;
    }

    if(score>0 && score %100===0){
      checkpointSound.play()
    }
    if(keyDown("SPACE")&(trex.y>=150)){
      trex.velocityY=-13      
      jumpSound.play ()
    }
    trex.velocityY=trex.velocityY+0.8; 

    spawnClouds()
    spawnObstacles()
    score= score+Math.round(getFrameRate()/120)

    if(trex.isTouching (obstacle_group)){
     // trex.velocityY=-12
      gameState = END
      dieSound.play()
    }

  }
  
  else if (gameState === END){
    restart.visible=true
    gameover.visible=true
ground.velocityX=0
cloud_group.setVelocityXEach(0)
obstacle_group.setVelocityXEach(0) 
cloud_group.setLifetimeEach(-1)
obstacle_group.setLifetimeEach(-1)
trex.velocityY=0
trex.changeAnimation("colliding",trex_collided)

  }
}