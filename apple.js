class Apple {
    constructor(pos) { // the initial apple is created with a position
        this.x = pos[0];
        this.y = pos[1];
        this.loc = createVector(this.x, this.y);
    }
    location() { // a new apple is created in a random position inside one of the monitors
        this.pos = isIn()
        this.x = this.pos[0];
        this.y = this.pos[1];
        this.loc = createVector(this.x, this.y);
    }
    show() { // draws the apple
        fill(255, 0, 0);
        circle(this.loc.x, this.loc.y, 35);
    }
}