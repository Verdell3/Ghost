var tower,towerImage
var door, doorImage, doorsGroup
var climber, climberImage, climbersGroup
var ghost, ghostImage
var gameState = "play"


function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png")
  ghostImage = loadImage("ghost-standing.png")
}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 1
  doorsGroup = new Group();
  climbersGroup = new Group();
  ghost = createSprite (200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale = 0.4
}

function draw(){
  background("black");
  if (gameState==="play"){
  if (tower.y > 400){
    tower.y = 300
    
  }
  
  if (keyDown("RIGHT_ARROW")){
    ghost.x = ghost.x + 3;
  }
  
  if (keyDown("LEFT_ARROW")){
    ghost.x = ghost.x - 3;
  }
  if (keyDown("space")){
    ghost.velocityY = -10;
  }
  ghost.velocityY = ghost.velocityY + 0.8
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0
  }
  
  spawnDoors();
  drawSprites();
  
}
if (gameState === "end"){
  text("GAME OVER",230,250);
}
} 

function spawnDoors(){
  if (frameCount% 240 === 0){
    door = createSprite(200,-50);
    climber = createSprite(200,10)
    door.addImage(doorImage);
    climber.addImage(climberImage);
    door.x = Math.round(random(120,400));
    climber.x = door.x
    door.velocityY = 2
    climber.velocityY = 2
    ghost.depth = door.depth
    ghost.depth = ghost.depth+1
    door.lifetime = 600
    climber.lifetime = 600
    doorsGroup.add(door);
    climbersGroup.add(climber);
  }
  
}
