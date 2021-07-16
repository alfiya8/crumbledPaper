var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
var ball_options={
   isStatic:false,
   restitution:0.3,
   friction:0,
   density:1.2
}
groundObj=new ground(width/2,670,width,20);
leftSide=new ground(1110,600,20,120);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Matter.Bodies.circle(x,y,radius,[ball_options])
ball.add(world);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,body,ball.position,{x:85,y:-85})
	}
} 


