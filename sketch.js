const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
//create box1
    box1 = new Box(700,320,70,70);
//create box2
    box2 = new Box(920,320,70,70);
//create ground
    ground = new Ground(600,height,1200,20);
//create pig1
    pig1= new Pig (810,350);
//create log1
    log1 = new Log (810,260,300,PI/2)
//create box3
    box3 = new Box(700,240,70,70);
//create box4
    box4 = new Box(920,240,70,70);
//create pig2
    pig2 = new Pig (810,220);
//create log2    
    log2 = new Log (810,180,300,PI/2);
//create box5
    box5 = new Box (800,160,70,70);
//create log3
    log3 = new Log (760,120,150,PI/7);
//create log4
    log4 = new Log (870,120,150,-PI/7);
//create angry bird
    angrybird = new Bird (100,100)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    //display
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    box4.display();
    box3.display();
    box5.display();
    log3.display();
    log4.display();
    angrybird.display();
}