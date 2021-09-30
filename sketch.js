var canvas;

var music;

var surface1, surface2, surface3, surface4;

var box;

var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    box = createSprite(500, 150, 50,50);
    box.shapeColor = "white";

    surface1 = createSprite(150,550,220, 50);
    surface1.shapeColor = "red";

    surface2 = createSprite(380,550,220, 50);
    surface2.shapeColor = "orange";

    surface3 = createSprite(610,550,220, 50);
    surface3.shapeColor = "purple";

    surface4 = createSprite(840,550,220, 50);
    surface4.shapeColor = "turquoise";

    

}

function draw() {
    background("black");

    edges = createEdgeSprites();
    box.bounceOff(edges);

    music.play();

    
  if(isTouching(box, surface1) && box.bounceOff(surface1)){
    box.shapeColor = "red";
  }

  if(isTouching(box, surface2) && box.bounceOff(surface2)){
    box.shapeColor = "orange";
  }
   
  if(isTouching(box, surface3) && box.bounceOff(surface3)){
    box.shapeColor = "purple";
  }

  else if(isTouching(box, surface4) && box.bounceOff(surface4)){
    box.shapeColor = "turquoise";
  }

    drawSprites();
}    

function keyPressed(){
  if(keyCode === 32){
    box.velocityX = 5;
    box.velocityY = 7;

  }
}


