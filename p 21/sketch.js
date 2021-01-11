var music;
var ground1,ground2,ground3,ground4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
ground1=createSprite(0,580,360,30);
ground1.shapeColor =rgb(0,0,255);

ground2=createSprite(295,580,200,30);
ground2.shapeColor = rgb(255,128,0);

ground3=createSprite(515,580,200,30);
ground3.shapeColor = rgb(153,0,76);

ground4=createSprite(740,580,220,30);
ground4.shapeColor = rgb(0,100,0);

    //create box sprite and give velocity

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = rgb(255,255,255);
  
    ball.velocityX = 4;
    ball.velocityY = 8;
}
function draw() {
  background(rgb(169,169,169)); 
    //create edgeSprite
  edges=createEdgeSprites();
  ball.bounceOff(edges);
//drawSprites();

    //add condition to check if box touching surface and make it box
 if (ground1.isTouching(ball)&&ball.bounceOff(ground1)) {
 //change color here
   ball.shapeColor = rgb(0,0,255);
   music.play();
   }
  
if (ground2.isTouching(ball)){
//change color here
  ball.shapeColor = rgb(255,128,0);
  ball.velocityX =0;
  ball.velocityY =0;
  music.stop(); 
}

if (ground3.isTouching(ball)&&ball.bounceOff(ground3)) {
 //change color here
 ball.shapeColor = rgb(153,0,76);
  }

if (ground4.isTouching(ball)&&ball.bounceOff(ground4)) {
//change color here
  ball.shapeColor =  rgb(0,100,0);
}

drawSprites();
}
   