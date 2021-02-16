
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Cbodies = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand1 = new Stand(400,200,500,50);
	stand2 = new Stand(200,200,50,50);
	stand3 = new Stand(300,200,50,50);
	stand4 = new Stand(500,200,50,50);
	stand5 = new Stand(600,200,50,50);
	
	ball1 = new Ball(200,500,100);
	ball2 = new Ball(300,500,100);
	ball3 = new Ball(400,500,100);
	ball4 = new Ball(500,500,100);
	ball5 = new Ball(600,500,100);

	chain1 = new Chain(ball1.body,stand2.body,200,200);
	chain2 = new Chain(ball2.body,stand3.body,300,200);
	chain3 = new Chain(ball3.body,stand1.body,400,200);
	chain4 = new Chain(ball4.body,stand4.body,500,200);
	chain5 = new Chain(ball5.body,stand5.body,600,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  stand2.display();
  stand3.display();
  stand4.display();
  stand5.display();
  stand1.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  if(keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(ball1.body , ball1.body.position,{x:-25 , y:10});
  }

  drawSprites();
 
}



