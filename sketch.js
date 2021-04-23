var bow , arrow, scene,redbGroup,bluebGroup,greenbGroup,pinkbGroup,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0
  //creating groups
  redbGroup  = new Group ();
  greenbGroup= new Group ();
  bluebgroup = new Group ();
  pinkbGroup = new Group ();
  arrowGroup = new Group ();
}

function draw() {
  background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  drawSprites();
  text("Score: "+ score, 300,50);
  if (keyDown("space")){
    spawnArrows ();
    //wait one second;
  }
  if (arrowGroup.isTouching(redbGroup)){
    redbGroup.destroyEach();
    arrowGroup.destroyEach ();
    score = score - 1;
    //red balloon is a danger;
  }
  if (arrowGroup.isTouching(greenbGroup)){
    greenbGroup.destroyEach();
    arrowGroup.destroyEach ();
  }
  if (arrowGroup.isTouching(bluebgroup)){
    bluebgroup.destroyEach();
    arrowGroup.destroyEach ();
    score = score + 3
  }
  if (arrowGroup.isTouching(pinkbGroup)){
    pinkbGroup.destroyEach();
    arrowGroup.destroyEach ();
    score = score + 4
  }
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redbGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  bluebgroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenbGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkbGroup.add(pink);
}
function spawnArrows () {
  arrow = createSprite (bow.x,bow.y,20,20);
  arrow.addImage(arrowImage);
  arrow.velocityX = -4;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
    
}
function gameAdapt () {
  if (frameCount>300) {
    redbGroup.velocityX = 4;
  }
} 
