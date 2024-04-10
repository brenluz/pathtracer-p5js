class Apple {
    constructor(pos) {
        this.x = pos[0];
        this.y = pos[1];
        this.loc = createVector(this.x, this.y);
    }
    location() {
        this.pos = isIn()
        this.x = this.pos[0];
        this.y = this.pos[1];
        this.loc = createVector(this.x, this.y);
    }
    show() {
        fill(255, 0, 0);
        circle(this.loc.x, this.loc.y, 35);
    }
}