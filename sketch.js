var sq1,sq2

function setup() {
  createCanvas(800,400);
  sq1=createSprite(400, 200, 50, 50);
  sq2=createSprite(600, 400, 200, 50);
  sq1.debug=true;
  sq2.debug=true;
  sq2.shapeColor='green';
  sq1.shapeColor='yellow'
}

function draw() {
  background(255,255,255);
  sq2.x=World.mouseX;
  sq2.y=World.mouseY;
  if (sq2.x-sq1.x<sq1.width/2+sq2.width/2 && sq1.x-sq2.x<sq1.width/2+sq2.width/2 && sq2.y-sq1.y<sq1.height/2+sq2.height/2 && sq1.y-sq2.y<sq1.height/2+sq2.height/2){
    sq2.shapeColor='red';
    sq1.shapeColor='red';
  }else{
    sq2.shapeColor='green';
    sq1.shapeColor='yellow';
  }
  //console.log(sq1.x,sq1.y);
  //console.log(sq2.x,sq2.y);
  drawSprites();
}
