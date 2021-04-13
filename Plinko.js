class Plinko {
    constructor(x,y,r){
      var options = {
        restitution: 1,
        friction: 0,
        isStatic:true
      }
      this.body = Bodies.circle(x,y,10,options)
      this.r= 10;
      
      World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r,this.r);
        pop(); 
        
    }
}