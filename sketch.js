
var fixedRect, movingRect,f1,f2,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
fixedRect.shapeColor="blue";
//fixedRect.velocityY= 5;

movingRect=createSprite(600, 800, 80, 50);
movingRect.shapeColor="blue";
//movingRect.velocityY= -5;

/*f1=createSprite(100, 600, 50, 80);
f1.shapeColor="blue";
f1.velocityX= 5;

f2=createSprite(500, 600, 80, 50);
f2.shapeColor="blue";
f2.velocityX= -5;*/

gameObject1=createSprite(100, 100, 50, 50);
gameObject1.shapeColor="blue";
gameObject2=createSprite(200, 100, 50, 50);
gameObject2.shapeColor="blue";
gameObject2.velocityX = -2;
gameObject3=createSprite(300, 100, 50, 50);
gameObject3.shapeColor="blue";
gameObject4=createSprite(400, 100, 50, 50);
gameObject4.shapeColor="blue";

movingRect.debug=true;
fixedRect.debug=true;

}

function draw() {
  background(0,0,0); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(gameObject2,gameObject1)){
    movingRect.shapeColor="red";
    gameObject1.shapeColor="red";
  
  }else {
    movingRect.shapeColor="green";
    gameObject1.shapeColor="green";

  }

/*if(movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){

  fixedRect.velocityY= -5;
  movingRect.velocityY= 5;

}*/
//if(f2.x-f1.x < f2.width/2+f1.width/2&&f1.x-f2.x < f2.width/2+f1.width/2){

  //f1.velocityX= -5;
  //f2.velocityX= 5;

//}
bounceOff(gameObject1,gameObject2);
  drawSprites();
}
