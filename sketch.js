var score=0
var trex ,trex_running; 
var PLAY =1
var END =0
var gameState = PLAY

 function preload(){
   
  trex_collided = loadAnimation("trex_collided.png"  )
   trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
   groundImage = loadImage("ground2.png")
   cloudimg = loadImage("cloud.png")
   obstacleimg1 = loadImage("obstacle1.png")
   obstacleimg2 = loadImage("obstacle2.png")
   obstacleimg3 = loadImage("obstacle3.png")
   obstacleimg4 = loadImage("obstacle4.png")
   obstacleimg5 = loadImage("obstacle5.png")
   obstacleimg6 = loadImage("obstacle6.png")
   gameOver_ing = loadImage("gameOver.png")
   restart_ing = loadImage("restart.png")
   dieSound =loadSound("die.mp3")
   checkpointSound =loadSound("checkpoint.mp3")
   jumpSound =loadSound("jump.mp3")
}

function setup(){
 createCanvas(600,200)
  
  //create a trex sprite
  
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running);
  trex.addAnimation("colliding",trex_collided)
  trex.scale=0.5;

  ground = createSprite(200,180,400,20);
   ground.addImage("ground",groundImage);
   invisibleGround = createSprite(200,190,400,10);
   invisibleGround.visible = false;

   var raNum = Math.round(random(10,50))
   console.log(raNum)

   cloud_group = new Group();
   obstacle_group =new Group();

   trex.setCollider("circle",0,0,40)  

 //trex.debug=true

 restart = createSprite(300,140)
 gameover= createSprite(300,100)
 restart.addImage(restart_ing)
 gameover.addImage(gameOver_ing)
 restart.scale = 0.5
 gameover.scale = 0.5
}


function draw(){

  background(180)
  ground.velocityX=-(6+3*score/100)  
  //console.log(trex.y)
  

gameStates()


  
    
if(mousePressedOver(restart)){
reset()
}
 
trex.collide(invisibleGround);

text("Score : "+score,300,50)
         
  drawSprites();

}

function  spawnClouds()
{
  if(frameCount %60===0){

  
 cloud = createSprite(600,100,40,10)
 cloud.velocityX=-3
 cloud.y=Math.round(random(10,60))
 cloud.addImage(cloudimg)
 cloud.scale=0.5

 cloud.lifetime=200  
 console.log(trex.depth)
 cloud.depth = trex.depth;
 trex.depth = trex.depth + 1;
 cloud_group.add(cloud)
}
}

function reset(){
gameState = PLAY;
score = 0
obstacle_group.destroyEach()
cloud_group.destroyEach()
trex.changeAnimation("running", trex_running)
}
 
