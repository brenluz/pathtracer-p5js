class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.alive = true;
        this.start = false
        this.body = []; // array to store the positions of the bodythis
        for(let i = 0; i < 5; i++) {
            this.body.push({x: this.x - i * 12, y: this.y}); // initialize the body positions
        }
        this.head = this.body[0]; 
    }
    setDir(x, y) {
        if(this.xspeed == -x || this.yspeed == -y) {
            return;
        }
        this.xspeed = x;
        this.yspeed = y;
    }
    show() {
        push();
        fill(255, 0, 0);
        for(let i = 0; i < this.body.length; i++) {
            circle(this.body[i].x, this.body[i].y, 60); // draw the body at the stored positions
        }
        fill(0);
        let eyeRadius = 10;
        let eyeOffset = 20;
        let eyeX1 = this.body[0].x + this.xspeed * eyeOffset - this.yspeed * eyeOffset;
        let eyeY1 = this.body[0].y + this.yspeed * eyeOffset + this.xspeed * eyeOffset;
        let eyeX2 = this.body[0].x + this.xspeed * eyeOffset + this.yspeed * eyeOffset;
        let eyeY2 = this.body[0].y + this.yspeed * eyeOffset - this.xspeed * eyeOffset;
        circle(eyeX1, eyeY1, eyeRadius);
        circle(eyeX2, eyeY2, eyeRadius);
        pop();
    }
    update() {
        // update the body positions
        let bodyspeed = this.speed/50; // speed at which the body parts follow the head
        for(let i = this.body.length - 1; i > 0; i--) {
            let dx = this.body[i - 1].x - this.body[i].x;
            let dy = this.body[i - 1].y - this.body[i].y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if(dist > 0) {
                this.body[i].x += dx * bodyspeed;
                this.body[i].y += dy * bodyspeed;
            }
        }
        this.body[0] = {x: this.x, y: this.y}; // the head of the snake is at the current position
    }
    step() 
    {
        if (this.start == true){ 
            this.speed = 2;
            if(this.xspeed == undefined && this.yspeed == undefined){
                this.xspeed = 1;
                this.yspeed = 1;
            }
            else {    
            this.x += this.xspeed * this.speed;
            this.y += this.yspeed * this.speed;
            }
        }
        else {
            this.speed = 0;
        }
    }
    kill() {
        this.start = false;
        this.body = [];
        this.x = 0;
        this.y = 0;
        this.alive = false;
    }
}