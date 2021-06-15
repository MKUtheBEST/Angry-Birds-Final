class SS{
    constructor(body,point){
        var options = {
            bodyA : body,
            pointB : point,
            stiffness : 0.04,
            length: 50,
        }
        this.bodyA = body;
        this.pointB = point;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

   

    display(){
        if(this.chain.bodyA){
            var posA = this.chain.bodyA.position;
            var posB = this.chain.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }

    fly(){
        this.chain.bodyA = null;
    }
}