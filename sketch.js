function preload(){
bgImage=loadImage ("bg.png")
playerMoving=loadAnimation("c1.png","c2.png","c3.png","c4.png")
obstacle1=loadImage("rock.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight)
 bg=createSprite(windowWidth/2,windowHeight/2)
bg.addImage(bgImage)
bg.scale=3
bg.velocityX=-3
player=createSprite(50,height-100)
player.addAnimation("running",playerMoving)
player.scale=0.3
invisibleGround = createSprite(width/2,height-80,width,10);
invisibleGround.visible = false;
obstaclesGroup=new Group ()
}

function draw() {
 drawSprites()
 if (bg.x<width/3){
    bg.x=width/2
 }
 console.log(windowHeight)
 if(keyDown("space")&& player.y>height-200) {
   
   player.velocityY = -16;
 }

 player.velocityY = player.velocityY + 0.8

 spawnObstacles();

 player.collide(invisibleGround);
 
}

function spawnObstacles() {
   if(frameCount % 120 === 0) {
 
     var obstacle = createSprite(width,height-100,40,40);
 
     obstacle.setCollider("rectangle",0,0,200,200)
     obstacle.addImage(obstacle1);
     obstacle.velocityX = -6
     obstacle.scale = 0.15;   
  
     obstacle.lifetime = 400;
     obstaclesGroup.add(obstacle);
     
   }
 }
 Footer
 