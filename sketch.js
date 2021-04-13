const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var engine, world;
var division1,division2,division3,division4,division5,division6,division7
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score=0;
function setup(){
    createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    //creating ground
    ground1 = new ground(250,790,500,20);
    //creating the divisions
    division1 = new ground(7,600,15,400);
    division2 = new ground(80,600,15,400);
    division3 = new ground(150,600,15,400);
    division4 = new ground(220,600,15,400);
    division5 = new ground(310,600,15,400);
    division6 = new ground(390,600,15,400);
    division7 = new ground(490,600,15,400);

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 
function draw(){
    background("teal");
    Engine.update(engine);
    //displaying the ground
    fill("white");
    ground1.display();
    
  

    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
      score++;
    }
  
   for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    division7.display();
 }
 