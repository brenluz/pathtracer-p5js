// array with all the lines that make up the mapping of the monitors
let arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p] 
let initialX = 700
let initialY = 500
let xSpeed = 0;
let ySpeed = 0;
let breaking = false;
let colors = [];
function setup() {
    createCanvas(1920,1080);
    reset();
}
function updateColors() { // makes each body part of the snake have a different color
    for(let i = 0; i < snake.body.length*3; i++) {
        // only changes colors that are undefined so the colors don't change every frame
        if(colors[i] == undefined) { 
            colors[i] = (random(255)); 
        }
    }
}
function reset() {  // resets the game
    snake = new Snake(initialX,initialY); // creates a new snake
    apple = new Apple(isIn()); // creates a new apple
    updateColors(); // makes each body part of the snake have a different color
    breaking = false; // resets the breaking variable (important so the kill function can be called again)

}
function draw() {
    background(0);
    mapMonitor(); // draws the map monitor
    apple.show(); // shows the apple
    for(let i = 0; i < arr.length; i++) { // checks if the snake has crossed a border
        if(breaking == true) {
            break
        }
        if (crossedLine(snake.x,snake.y,snake.body[4].x,snake.body[4].y,arr[i])) {
            console.log("Crossed line");
            snake.kill(); // if the snake has crossed a border it dies
            breaking = true; // breaks the loop
        }
    }
    if(snake.alive == true) { // if the snake is alive it appears on the screen, moves and updates its parameters
    snake.show();
    snake.update();
    snake.step();
    snake.eat();
    }
}
function keyPressed() { 
    if(keyCode === ENTER) { // this creates a new snake if there is none and starts the game
        snake.start = true;
        if (snake.alive == false) {
            reset();
        }

    }
    // this changes the direction of the snake when a specific key has been pressed (these can be changed)
    if (keyCode === 65) { // 65 = a
      snake.setDir(-1, 0);
    } else if (keyCode === 68) { // 68 = d
      snake.setDir(1, 0);
    } else if (keyCode === 83) { // 83 = s
      snake.setDir(0, 1);
    } else if (keyCode === 87) { // 87 = w
      snake.setDir(0, -1);
    }
  }
function crossedLine(x,y,xoff,yoff,line) { // checks if the snake has crossed a border
    if (line.direction == 0) {
        return crossedLineOny(x,y,xoff,yoff,line);
    }
    else if (line.direction == 1) {
        return crossedLineOnx(x,y,xoff,yoff,line);
    }
    else {
        console.log("Error");
    }
}
function crossedLineOny(x,y,xoff,yoff,line) { // checks if the snake has crossed a border on the y axis
    let linex = line.startX; 
    let parede = line.dentro;
    if(line.startY - line.endY > 0) {
        B = line.startY; 
        A = line.endY;
    }
    else if (line.startY - line.endY < 0) {
        B = line.endY;
        A = line.startY;
    }
    if ((y < B && y > A) && ( yoff < B && yoff > A)) {
        if (parede == 'direita' && x < linex && xoff > linex) {
            console.log("Crossed line horizontaly to the left");
            return true 
        }
        else if (parede == 'esquerda' && x > linex && xoff < linex) {
            console.log("Crossed line horizontaly to the right");
            return true
        }
    }


}
function crossedLineOnx(x,y,xoff,yoff,line) {  // checks if the snake has crossed a border on the x axis
    if(line.startX - line.endX > 0) {
        B = line.startX; 
        A = line.endX;
    }
    else if (line.startX - line.endX < 0) {
        B = line.endX;
        A = line.startX;
    }
    if ((x < B && x > A) && ( xoff < B && xoff > A)) {
        if (line.dentro == 'emcima' && y > line.startY && yoff < line.startY) {
            console.log("Crossed line vertically to the bottom");
            return true
        }
        else if (line.dentro == 'embaixo' && y < line.startY && yoff > line.startY) {
            console.log("Crossed line vertically to the top");
            return true
        }
    }
}
/**
 * Draws the map monitor on the canvas.
 */
function mapMonitor(){
    push(); 
    fill(255,209,0);
    noStroke();
    /**
     * Draws the first monitor rectangle.
     */
    monitor1 = {
        x: 481,
        y: 0,
        width: 400,
        height: 640
    }
    rect(481,0,400,640); // tela dos monitores
    /**
     * Draws the second monitor rectangle.
     */
    monitor2 = {
        x: 881,
        y: 66,
        width: 640,
        height: 400
    }
    rect(928,66,640,400);
    /**
     * Draws the third monitor rectangle.
     */
    monitor3 = {
        x: 352,
        y: 572,
        width: 640,
        height: 360
    }
        rect(352,572,640,360); 
    /**
     * Draws the fourth monitor rectangle.
     */
    monitor4 = {
        x: 1047,
        y: 440,
        width: 400,
        height: 640
    }
     rect(1047,440,400,640);
    
    /**
     * Draws the border (the empty space between the monitors) of monitors.
     */
    borda1 = rect(879,66,60,400); // borda de cima 
    borda2 = rect(989,572,60,360); // borda de baixo
    
    pop();
}
function isIn() { // generates the apple inside one of the monitors
    let monitors = [
        {x: 481, y: 0, width: 400, height: 640},
        {x: 881, y: 66, width: 640, height: 400},
        {x: 352, y: 572, width: 640, height: 360},
        {x: 1047, y: 440, width: 400, height: 640},
    ];

    let monitor = random(monitors); // select a random monitor
    let x = random(monitor.x, monitor.x + monitor.width); // generate a random x position within the monitor
    let y = random(monitor.y, monitor.y + monitor.height); // generate a random y position within the monitor
    let pos = [x,y]; // create a vector with the random position
    return pos;

}