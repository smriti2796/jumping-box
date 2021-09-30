function isTouching(tom, jerry){
    if (tom.x - jerry.x < jerry.width/2 + tom.width/2
      && jerry.x - tom.x < jerry.width/2 + tom.width/2
      && tom.y - jerry.y < jerry.height/2 + tom.height/2
      && jerry.y - tom.y < jerry.height/2 + tom.height/2){
        return true;
  }
  else {
    return false;
  }
  }

  function bounceOff(object1,object2){

   if (object1.x - object2.x <object2.width/2 + object1.width/2 &&
     object2.x - object1.x < object2.width/2 + object1.width/2) {
    
     object1.velocityX = object1.velocityX (-1);
     object2.velocityX = object2.velocityX* (-1);
    } 
    
   if (object1.y- object2.y< object2.height/2 + object1.height/2 &&
     object2.y - object2.y< object2.height/2 + object1.height/2) {

     object1.velocityY = object1.velocity*(-1);
     object2.velocityY = object2.velocityY*(-1);
    
    }
}    