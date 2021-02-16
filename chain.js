class Chain{
    constructor(a,b,x,y) {
    var options = {
       bodyA : a,
       bodyB : b,
       stifness : 4,
       length : -575
    }
    this.x = x;
    this.y = y;
    this.chain = Cbodies.create(options);
    World.add(world,this.chain);
    }
    display(){
       strokeWeight(3);
       line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.x,this.y);
    }
}