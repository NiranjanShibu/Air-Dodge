var START = 0;
var PLAY1 = 1;
var PLAY2 = 2;
var END1 = 3;
var END2 = 4;
var gameState = START;
var redH, redHImage, blueH, blueHImage;
var gPlane, gPlaneImage, yPlane, yPlaneImage;
var gPlaneLeft, gPlaneLeftImage, yPlaneLeft, yPlaneLeftImage;
var sky, skyImage;
var fastPower, fastPowerImage, slowPower, slowPowerImage;
var bigPower, bigPowerImage, smallPower, smallPowerImage;
var randoPower, randoPowerImage;
var title, nameImage, oneP, onePImage, twoP, twoPIMage;

var redHeliex;
var redHeliyi;

function preload(){

  redHImage = loadImage("redHeli.png");
  blueHImage = loadImage("blueHeli.png");
  gPlaneImage = loadImage("greenPlane.png");
  yPlaneImage = loadImage("yellowPlane.png");
  skyImage = loadImage("bg.png");
  fastPowerImage = loadImage("fastPU.png");
  slowPowerImage = loadImage("slowPU.png");
  bigPowerImage = loadImage("bigPU.png");
  smallPowerImage = loadImage("smallPU.png");
  randoPowerImage = loadImage("randPU.png");
  nameImage = loadImage("download (2).png");
  onePImage = loadImage("download.png");
  twoPImage = loadImage("download (1).png");
  gPlaneLeftImage = loadImage("greenPlaneleft.png");
  yPlaneLeftImage = loadImage("yellowPlaneleft.png");

}

function setup(){
  createCanvas(1366,657)

  if(gameState === START){

    createTitle();

  }

  redHeliyi = 328.5;
  redHeliex = 683;
  
}

function draw(){

  background("lightBlue");

  if(keyDown("o") && gameState === START){
    
    gameState = PLAY1;

    twoP.y = 700;
    oneP.y = 700;
    title.y = 725;

  }

  if(gameState === PLAY1){

    sky = createSprite(width/2, height/2, 20, 20);
    sky.addImage("bg", skyImage);
    sky.scale = 3.6;
    spawnRed();

  }

   drawSprites();
  }

  function createTitle(){

    title = createSprite(width/2, 250, 20, 20);
    title.addImage("title", nameImage);
    title.scale = 3;
  
    oneP = createSprite(width/2, 365, 20, 20);
    oneP.addImage("oneplayer", onePImage);
    oneP.scale = 1.6;
  
    twoP = createSprite(width/2, 440, 20, 20);
    twoP.addImage("twoplayer", twoPImage);
    twoP.scale = 1.6;  

  }

  function spawnRed(){

    redH = createSprite(redHeliex, redHeliyi, 20, 20);
    redH.addImage("player", redHImage);
    redH.scale = 0.23;

    if(keyDown(UP_ARROW)){

      redHeliyi = redHeliyi-4;

    }

    if(keyDown(DOWN_ARROW)){

      redHeliyi = redHeliyi+4;

    }

    if(keyDown(LEFT_ARROW)){

      redHeliex = redHeliex-4;
    }

    if(keyDown(RIGHT_ARROW)){

      redHeliex = redHeliex+4;

    }


  }