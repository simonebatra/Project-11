var player, playerAnimate;
var ground, groundImage;
var invisibleGround1, invisibleGround2;

function preload(){
  //pre-load images
  playerAnimate = loadAnimation("Runner-1.png", "Runner-2.png");
  groundImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  ground = createSprite(200, 200, 500, 600);
  ground.addImage("Racing_Track", groundImage);

  player = createSprite(300, 200, 10, 20);
  player.addAnimation("Player_Animation", playerAnimate);
  player.scale=0.05;

  invisibleGround1 = createSprite(50, 200, 50, 400);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(350, 200, 50, 400);
  invisibleGround2.visible = false;

}

function draw() {
  background(0);

  player.collide(invisibleGround1);
  player.collide(invisibleGround2);

  ground.velocityY = 3;

  if (ground.y > 450) {
    ground.y = 200;
  }

  if(player.x<80){
    player.x=80;
  }

  if(keyDown("left")){
    player.x+=-35;
  }

  if(keyDown("right")){
    player.x+=40;
  }

  drawSprites();
}
