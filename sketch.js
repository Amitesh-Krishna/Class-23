const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine , world ,ground;
var object , box;

function setup(){

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  object = new Box(200,200,50,100);
  box = new Box(225,100,50,80);

  ground = new Ground(200,385,width,20);
}

function draw(){
  background(0,0,0);
  
  Engine.update(engine);

  object.display();
  box.display();
  ground.display();

 }