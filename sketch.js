
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var boy, stone, boyImage;
var mango1, mango2, mango3, mango4, mango5;

function preload(){
	boyImage = loadImage("Plucking mangoes/boy.png")
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

boy = createSprite(120, 400, 10, 10)

stone = new Stone(300, 200, 20, 20)

mango1 = new Mango(150, 220, 10, 10);
mango2 = new Mango(90, 110, 10, 10);
mango3 = new Mango(230, 400, 10, 10);
mango4 = new Mango(500, 300, 10, 10);
mango5 = new Mango(350, 250, 10, 10);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  Engine.update(engine);

  boy.display();
stone.display();
ground.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

  drawSprites();
 
}



