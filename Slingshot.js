class SlingShot {
    constructor(bodyA,pointB){

        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 8
            }
            this.pointB = pointB;
            this.sling = Constraint.create(options);
            World.add(world,this.sling)  
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    } 
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA=null;
    }
}
