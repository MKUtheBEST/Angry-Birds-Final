class Base {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':3,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      fill(255);
      //rect(0, 0, this.width, this.height);
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height)
      
      pop();
    }
  };