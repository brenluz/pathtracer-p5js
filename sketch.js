let x;
let y;
let arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p]
let a = [0,481,572,481,0]  // 0 varia o y e 1 varia o x
let b = [1,481,0,881,0] 
let c = [0,881,0,881,66]
let d = [1,881,66,1568,66]
let e = [0,1568,66,1568,466]
let f = [1,1568,466,1446,466]
let g = [0,1446,466,1446,1080]
let h = [1,1446,1080,1047,1080]
let i = [0,1047,1080,1047,932]
let j = [1,1047,932,352,932]
let k = [0,352,932,352,572]
let l = [1,352,572,481,572]
let m = [0,881,572,881,465]
let n = [1,881,465,1047,465]
let o = [0,1047,465,1047,572]
let p = [1,1047,572,881,572]


function setup() {
    let x = mouseX;
    let y = mouseY;

    createCanvas(1920,1080);
}
function draw() {
    background(0);
    mapMonitor();
    ellipse(mouseX,mouseY,50,50);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][0] == 0) {
            if(crossedLineOnx(x,y,xoff,yoff,arr[i])){
                fill(0,255,0);
            
            }
        }
        if(arr[i][0] == 1) {
            if(crossedLineOny(x,y,xoff,yoff,arr[i])){
                fill(255,0,0);
            }
        }
    }
}
function mouseMoved() {
    xoff = mouseX;
    yoff = mouseY;
}
function crossedLineOny(x,y,xoff,yoff,line) {
    if(line[0] == 1) {
        if((line[1] < x && line[1] < xoff) && (line[3] > x && line[3] > xoff)
        && ((line[2] < y && line[2] < yoff)|| (line[2] > y && line[2] > yoff))) {
            return true
        }
        if((line[1] > x && line[1] > xoff) && (line[3] < x && line[3] < xoff)
        && ((line[2] < y && line[2] < yoff)|| (line[2] > y && line[2] > yoff))) {
            return true
        }
    }
}

function crossedLineOnx(x,y,xoff,yoff,line) {
    if(line[0] == 0) {
        if((line[2] < y && line[2] < yoff) && (line[4] > y && line[4] > yoff)
        && ((line[1] < x && line[1] < xoff)|| (line[1] > x && line[1] > xoff))) {
            return true
        }
        if((line[2] > y && line[2] > yoff) && (line[4] < y && line[4] < yoff)
        && ((line[1] < x && line[1] < xoff)|| (line[1] > x && line[1] > xoff))) {
            return true
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
