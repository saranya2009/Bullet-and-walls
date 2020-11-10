var bullet,thickness;
var wall,speed,weight;
var text_1=0;

function setup(){
  createCanvas(900,400);

    speed  =  random(55,90)
    weight =  random(400,1500)
 thickness =  random(22,83)

 bullet  =  createSprite(50,200,55,5);
 bullet.shapeColor="white";
 bullet.velocityX=speed;

 wall    =  createSprite(800,200,thickness,height/2);
 wall.shapeColor="yellow";
 }

 function draw(){
   background(0);
   if(wall.x-bullet.x <(bullet.width+wall.width)/2)
     {
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10)
    {
      text_1=1;
      wall.shapeColor="red";
    }
    if(damage<10)
    {
      text_1=2;
      wall.shapeColor="green";
    }
    if(text_1===1){
      textSize(30);
      fill("red");
      stroke("red");
      text("Wall is not Efficient",100,200);
    }
    if(text_1===2){
      textSize(30);
      fill("green");
      stroke("green");
      text("Wall is Efficient",100,200);
    }
   drawSprites();
 }
}