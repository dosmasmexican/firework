class Firework{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.vel = createVector(0,-10);
        this.acc = createVector(0,0);
    }

    applyForce(force){
    this.acc.add(force);
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    show(){
    circle(this.pos.x, this.pos.y, 4);
    }
}