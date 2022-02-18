const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var link;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(6,{x:100,y:0})

  var fruit_options= {
    density: 0.001
  }

  fruit = Bodies.circle(446,137,20,fruit_options);
  Matter.Composite.add(rope.body,fruit);

 link = new Link(rope, fruit);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  
  console.log(mouseX);
  console.log(mouseY);

  ellipse(fruit.position.x , fruit.position.y, 20,20 ); 

  Engine.update(engine);
  

 
   
}
