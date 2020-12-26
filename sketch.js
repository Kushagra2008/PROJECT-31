
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinko1, plinkoArray, engine, world, division1, divisionArray;
var ground1, particle1, particleArray;

function setup() {
  engine = Engine.create();
  world = engine.world;
  plinkoArray = [];
  divisionArray = [];
  particleArray = [];
  createCanvas(480,800);
  for (var x = 0; x <= 400; x += 50)
  {
    plinko1 = new plinko(37 + x,  230);
    plinkoArray.push(plinko1);
  }
  for (var y = 0; y <= 600; y += 50)
  {
    plinko1 = new plinko(20 + y,  170);
    plinkoArray.push(plinko1);
  }
  for (var y = 0; y <= 600; y += 50)
  {
    plinko1 = new plinko(20 + y,  290);
    plinkoArray.push(plinko1);
  }
  for (var x = 0; x <= 400; x += 50)
  {
    plinko1 = new plinko(37 + x,  350);
    plinkoArray.push(plinko1);
  }

  for (var x = 0; x < 500; x += 100)
  {
    division1 = new division(30 + x, 655, 20, 250);
    divisionArray.push(division1);
  }

  ground1 = new ground(240, 790, 480, 20);
} 

function draw() {
  Engine.update(engine);
  background(0);  
  if (frameCount % 80 == 0)
    {
      particle1 = new particle(100);
      particleArray.push(particle1);
    }
  drawSprites();
  for (var z = 0; z < plinkoArray.length; z ++)
  {
    plinkoArray[z].display();
  }
  for (var z = 0; z < divisionArray.length; z ++)
  {
    divisionArray[z].display();
  }
  for (var z = 0; z < particleArray.length; z ++)
  {
    particleArray[z].display();
  }
  ground1.display();
}
