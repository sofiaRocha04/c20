
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world,bl1,bl2,bl3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var planeOptions={
	isStatic:true
}
plane=Bodies.rectangle(600,580,1200,2,planeOptions)
World.add(world,plane)

var bl1options={
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}

var bl2options={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}

var bl3options={
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}

bl1=Bodies.circle(220,10,10,bl1options)
World.add(world,bl1)


bl2=Bodies.rectangle(110,50,10,10,bl2options)
World.add(world,bl2)

bl3=Bodies.rectangle(350,50,10,10,bl3options)
World.add(world,bl3)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(plane.position.x,plane.position.y,1200) 

  ellipse(bl1.position.x,bl1.position.y,30) 

  rect(bl2.position.x,bl2.position.y,50,50) 

  rect(bl3.position.x,bl3.position.y,100.50) 
  drawSprites();
 
}



