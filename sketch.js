const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  monster.debug=true;

  box11 = new Box(605, 550, 70, 70);
  box12 = new Box(675, 550, 70, 70);
  box13 = new Box(750, 550, 70, 70);
  box14 = new Box(825, 550, 70, 70);
  box15 = new Box(895, 550, 70, 70);
  box21 = new Box(640, 485, 140, 70);
  box22 = new Box(750, 485, 70, 70);
  box23 = new Box(860, 485, 140, 70);
  box31 = new Box(605, 410, 70, 70);
  box32 = new Box(675, 410, 70, 70);
  box33 = new Box(750, 410, 70, 70);
  box34 = new Box(825, 410, 70, 70);
  box35 = new Box(895, 410, 70, 70);
  box41 = new Box(640, 340, 140, 70);
  box42 = new Box(750, 340, 70, 70);
  box43 = new Box(860, 340, 140, 70);
  box51 = new Box(605, 270, 70, 70);
  box52 = new Box(675, 270, 70, 70);
  box53 = new Box(750, 270, 70, 70);
  box54 = new Box(825, 270, 70, 70);
  box55 = new Box(895, 270, 70, 70);
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box21.display();
  box22.display();
  box23.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box41.display();
  box42.display();
  box43.display();
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();

  hero.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}