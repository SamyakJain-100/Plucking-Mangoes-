class Launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.003,
            length:1
        }
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }
    attach(body) {
        this.constraint.bodyA = body;
    }

    fly() {
        this.constraint.bodyA = null;
    }
    display() {
        if (this.constraint.bodyA) {
            strokeWeight(4);
            stroke(0);
            var bodyA = this.constraint.bodyA.position;
            var pointB = this.constraint.pointB;
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }

    
}
