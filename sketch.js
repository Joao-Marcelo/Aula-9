var square;

function setup() {
  createCanvas(400,400);
  square = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  drawSprites();
if (keyDown("RIGHT")){
square.x = square.x + 3;
 background("purple");
}
if (keyDown("UP")){
 background("yellow");
}
}




