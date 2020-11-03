var runner 
var bor1,bor2,bor3,bor4;
var bg;
var lgHoriBricks,VertiBricks,HoriBricks;
var planeImg;
var gameState=1;
var PLAY=1
var END=0;
var Obstacle;

function preload(){
    bg=loadImage("underwater.jpg");
    lgHoriBricks=loadImage("long_hori_bricks.png");
    VertiBricks=loadImage("vertical_bricks.png")
    planeImg=loadImage("plane.png"); 
}    
function setup(){
    createCanvas(600,300);
    obstacles=new Group();
    runners=new Group();
    if(gameState===1){
    runner=createSprite(100,150,20,20);
    runner.addImage(planeImg,"plane");
    runner.scale=0.1;
    runners.add(runner);
    bor1=createSprite(300,0,600,20);
    bor1.addImage(lgHoriBricks,"long_hori_bricks");
    bor1.scale=0.33;
    bor2=createSprite(300,300,600,20);
    bor2.addImage(lgHoriBricks,"long_hori_bricks");
    bor2.scale=0.33;
    bor3=createSprite(20,150,20,300);
    bor3.addImage(VertiBricks,"vertical_bricks");
    bor3.scale=0.4;
    bor4=createSprite(580,150,20,300);
    bor4.addImage(VertiBricks,"vertical_bricks");
    bor4.scale=0.4;
}

}
function draw(){
    background(bg);
    
 if(gameState===1){
    
    
    if(keyDown("w")||keyDown("W")){
        runner.y=runner.y-5;
    }
    if(keyDown("s")||keyDown("S")){
        runner.y=runner.y+5;
    }
    
    if(frameCount%60===0){
      var num=Math.round(random(1,2));
      if(num===1){
      obstacle=createSprite(400,60,20,300);
      obstacle.depth=bor3+1
      obstacle.velocityX=-4
      obstacles.add(obstacle);
      obstacle.lifetime=400
      
      }
      if(num===2){
        obstacle=createSprite(400,240,20,300);
        obstacle.velocityX=-4
        obstacle.depth=bor3+1
        obstacles.add(obstacle);
        obstacle.lifetime=400 
        
      }
    }
    if(runners.isTouching(obstacles)){
       runner.destroy(); 
    }
   
 }
 
    drawSprites();
}
