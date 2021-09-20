const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var boy, ball, basket;

var backgroundImg;

var ground;
var stick;






function preload(){
backgroundImg = loadImage('images/cartoon.jpg');
boy = loadImage('images/boy.png');
basket = loadImage('images/basket.png')
}



function setup(){
createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

ground = new Ground(600, height, 1200, 20);

ball = new Ball(300,180,40);

stick = new Stick(1105, 260, 70, 10);

}


function draw(){
    background(backgroundImg);
    Engine.update(engine);

    image(boy,150,160,200,300);
    image(basket,1050,60,150,200)

    ground.display();
    ball.display();
    stick.display();
    }