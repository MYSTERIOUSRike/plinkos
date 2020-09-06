const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var ground1,ground2,ground3,divison1;

function setup() {
  engine = Engine.create();
  world = engine.world;
  frameRate(60);
  
  createCanvas(480,800);
  //  divison1= new division(80,750,400,10) 

  ground1= new ground(240,790,480,20)
  //ground2= new ground(40,780,10,400)
 // ground3= new ground(440,780,10,400)

 //division[0] = new division(0,height-divisionHeight/2,10,divisionHeight);

 for(var k=0; k<=width; k=k+80){
   divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var p=40;p<=width; p=p+50){
    plinkos.push(new plinko(p,75,10));
   }
   for(var p1=15;p1<=width-10; p1=p1+50) 
   {
    plinkos.push(new plinko(p1,175,10));
   }
   for(var p2=40;p2<=width; p2=p2+50){
    plinkos.push(new plinko(p2,275,10));
   }
   for(var p3=15;p3<=width-10; p3=p3+50) 
   {
    plinkos.push(new plinko(p3,375,10));
   }
  
}

function draw() {
  
  background(0);  

  ground1.display();
  
  for(var k=0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var p=0; p < plinkos.length; p++){
    plinkos[p].display();
  }
  for(var p1=0; p1 < plinkos.length; p1++){
    plinkos[p1].display();
  }
  for(var p2=0; p2 < plinkos.length; p2++){
    plinkos[p2].display();
  }
  for(var p3=0; p3 < plinkos.length; p3++){
    plinkos[p3].display();
  }

  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
   }

  for(var r=0; r < particles.length; r++){
    particles[r].display();
  }
  
  drawSprites();

}