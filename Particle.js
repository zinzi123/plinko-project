class Particle {
    constructor(x,y,r){
      var options = {
      'restitution' : 0.4
      }
      this.r = r;

      this.body = Bodies.circle(x,y,this.r,options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);
       
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r,this.r);
        fill(this.color)
        pop(); 
       
    }
}