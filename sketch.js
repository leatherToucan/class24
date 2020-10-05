
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,Bin,Bin2,Bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	Ball = new paperBall(200,620,40,40);
	ground = new Ground(400,650,800,20);

	Bin = new bin(550,630,300,20);
	Bin2 = new bin(400,600,20,100);
	Bin3 = new bin(700,600,20,100);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  Bin.display();
  Bin2.display();
  Bin3.display();
  Ball.display();
  drawSprites();
 
}