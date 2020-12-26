
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	P = new paper(100,530,70)
	D1= new ground(400,590,800,10)
	
	D4= new dustbin(700,510,140,150)
}


function draw() {
  rectMode(CENTER);
  background("pink");
 D1.display();
 
 D4.display();
 P.display();

 
}
function keyPressed() {
   if (keyCode === UP_ARROW){
   Matter.Body.applyForce(P.body,P.body.position,{x:200,y:-205});
   }
}


