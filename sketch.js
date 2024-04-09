let x;
let y;
let xoff;
let yoff;
let arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p]

function setup() {
    createCanvas(1920,1080);
}
function draw() {
    x = mouseX;
    y = mouseY;
    background(0);
    mapMonitor();
    ellipse(mouseX,mouseY,50,50);
    for(let i = 0; i < arr.length; i++) {
        crossedLine(x,y,xoff,yoff,arr[i]);
    }
    xoff = x;
    yoff = y;

}
function crossedLine(x,y,xoff,yoff,line) {
    if (line.direction == 0) {
        crossedLineOny(x,y,xoff,yoff,line);
    }
    else if (line.direction == 1) {
        crossedLineOnx(x,y,xoff,yoff,line);
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
        }
        else if (parede == 'esquerda' && x > linex && xoff < linex) {
            console.log("Crossed line horizontaly to the right");
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
        }
        else if (line.dentro == 'embaixo' && y < line.startY && yoff > line.startY) {
            console.log("Crossed line vertically to the top");
        }
    }
}
/**
 * Draws the map monitor on the canvas.
 */
function mapMonitor(){
    push(); 
    fill(255);
    // noStroke();
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
