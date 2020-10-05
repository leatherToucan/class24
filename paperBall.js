class paperBall{
  constructor(x, y, width, height){
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
      
       imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      
      if(keyCode === UP_ARROW){
        pos.y = pos.y - 0.25;
      }

      if(keyCode === RIGHT_ARROW){
        pos.x = pos.x - 0.25;
      }

      if(keyCode === DOWN_ARROW){
        pos.y = pos.y + 0.25;
      }

      if(keyCode === LEFT_ARROW){
        pos.x = pos.x + 0.25;
      }


     
  }
}