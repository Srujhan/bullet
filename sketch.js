var bullet,wall,speed,weight, thickness 

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 60, 10);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=color(80,80,80);
  speed=random(7,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness= random(22,83)
}

function draw() { 
  background(225); 
  if(wall.x-bullet.x<wall.width/2 + bullet.width/2)
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  
    if(damage>10);
    {
      bullet.shapeColor="green";
    }
    if(damage<10);
    {
      bullet.shapeColor="red";
    } 
  } 
  drawSprites();
}