var cash

function preload()
{
  
}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
var cash = createSprite(Mth.round(random(50,width-50),40, 10, 10));
}

function draw() {
  background(220);
  
  //moving background
  path  = craeteSprite(width/2,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  
  //creating boy running
  boy = createSprite(width/2, height - 20, 20, 20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale = 0.08;
  
  // code to reset the background
  if(path.y > height){
    path.y = height/2;
  }

}