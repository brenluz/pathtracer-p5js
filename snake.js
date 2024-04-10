class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.alive = true;
        this.start = false 
        this.body = []; // array to store the positions of the body
        for(let i = 0; i < 5; i++) {
            this.body.push({x: this.x - i * 12, y: this.y}); // initialize the body positions
        }
        this.head = this.body[0]; 
    }
    setDir(x, y) { // set the direction of the snake
        if(this.xdir == -x || this.ydir == -y) {
            return;
        }
        this.xdir = x;
        this.ydir = y;
    }
    show() { 
        push();

        for(let i = 0; i < this.body.length; i++) {
            fill(colors[i], colors[i + 1], colors[i + 2]) // fill the body parts with different colors
            circle(this.body[i].x, this.body[i].y, 60); // draw the body at the stored positions
        }
        fill(0);  // draw the eyes of the snake
        let eyeRadius = 10; 
        let eyeOffset = 20; 
        let eyeX1 = this.body[0].x + this.xdir * eyeOffset - this.ydir * eyeOffset;
        let eyeY1 = this.body[0].y + this.ydir * eyeOffset + this.xdir * eyeOffset;
        let eyeX2 = this.body[0].x + this.xdir * eyeOffset + this.ydir * eyeOffset;
        let eyeY2 = this.body[0].y + this.ydir * eyeOffset - this.xdir * eyeOffset;
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
    {   // if the game has started (enter has been pressed while a snake is alive) the snake moves
        if (this.start == true){ 
            this.speed = 2; // sets the speed of the snake to 2 every loop (needed for the snake to move)
            // if the snake has not been given a direction it doesnt move 
            if(this.xdir == undefined && this.ydir == undefined){ 
                this.xdir = 1; //(changes to the values are to avoid errors)
                this.ydir = 1;
            }
            else {    // if the snake has a direction it moves in said direction
            this.x += this.xdir * this.speed;
            this.y += this.ydir * this.speed;
            }
        }
        else {
            this.speed = 0; // if the game has not started the snake does not move
        }
    }
    kill() { // kill the snake
        this.start = false; 
        this.body = [];
        this.x = 0;
        this.y = 0;
        this.alive = false;
    }
    eat() { // check if the snake has eaten the apple and if so creates a new apple and adds a body part
        let head = this.body[0];
        let d = dist(head.x, head.y, apple.loc.x, apple.loc.y);
        if(d < 35) {
            apple.location();
            this.body.push({x: this.x, y: this.y});
        }
    }
}