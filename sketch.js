let x;
let y;
let xoff;
let yoff;
let arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p]
let apple;
let initialX = 700
let initialY = 500
let xSpeed = 0;
let ySpeed = 0;
let breaking = false;

function setup() {
    createCanvas(1920,1080);
    reset();
}
function reset() {
    snake = new Snake(initialX,initialY);
    apple = new Apple(isIn());
    breaking = false;

}
function draw() {
    x = mouseX;
    y = mouseY;
    background(0);
    mapMonitor();
    apple.show();
    for(let i = 0; i < arr.length; i++) {
        if(breaking == true) {
            break
        }
        if (crossedLine(snake.x,snake.y,snake.body[4].x,snake.body[4].y,arr[i])) {
            console.log("Crossed line");
            snake.kill();
            breaking = true;
        }
    }
    if(snake.alive == true) {
    snake.show();
    snake.update();
    snake.step();
    snake.eat();
    }
    xoff = x;
    yoff = y;

}
function keyPressed() {
    if(keyCode === ENTER) {
        snake.start = true;
        if (snake.alive == false) {
            reset();
        }

    }
    if (keyCode === 65) {
      snake.setDir(-1, 0);
    } else if (keyCode === 68) {
      snake.setDir(1, 0);
    } else if (keyCode === 83) {
      snake.setDir(0, 1);
    } else if (keyCode === 87) {
      snake.setDir(0, -1);
    }
  }
function crossedLine(x,y,xoff,yoff,line) {
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
function crossedLineOny(x,y,xoff,yoff,line) {
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
function crossedLineOnx(x,y,xoff,yoff,line) { 
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
    fill(0,255,0);
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
     * Draws the border of the first monitor.
     */
    borda1 = rect(879,66,60,400); // borda dos monitores
    
    /**
     * Draws the border of the third monitor.
     */
    borda2 = rect(989,572,60,360);
    
    pop();
}
function isIn() {
    let monitors = [
        {x: 481, y: 0, width: 400, height: 640},
        {x: 881, y: 66, width: 640, height: 400},
        {x: 879, y: 66, width: 60, height: 400},
        {x: 989, y: 572, width: 60, height: 360},
       
        // add the other two monitors here
    ];

    let monitor = random(monitors); // select a random monitor
    let x = random(monitor.x, monitor.x + monitor.width); // generate a random x position within the monitor
    let y = random(monitor.y, monitor.y + monitor.height); // generate a random y position within the monitor
    let pos = [x,y]; // create a vector with the random position
    return pos;

}