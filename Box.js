class Box {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
  this.Visiblity = 255;
}
display(){
  var angle = this.body.angle;
  var pos= this.body.position;
  
  if(this.body.speed<3){

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
    }
    else{
      push();
        World.remove(world, this.body);
        this.Visibility = this.Visibility - 0.2;
        tint(255,this.Visiblity);
        pop();
    }
}

}
