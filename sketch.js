var r,g,b;
//var x,y;
var peach;
var peaches = [];
var peaches2 = [];
//var x1,y1;


function preload(){
    peach = loadImage('image/peachemoji.png');
    
}

 
function setup(){
    createCanvas(1200, 1200);
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    //x = width/ 2;
    //y = height;  
    //x1 = width/3;
    //y1 = height;
    for (var i = 0; i<30 ; i++){
        peaches[i] = new Peach(i*2+200,height,50,50,random(1,10));

    }
    for (var e = 0;e<30;e++){
        peaches2[e] = new Peach(1200-(e*2+200),height,50,50,random(1,10));

    }  
}

function draw(){
    background(255, 204, 0);
    stroke(r, g, b);
    fill(r, g, b);
    ellipse(600, 600, 400, 400);
    stroke(50);
    fill(125);
    
    for (var i = 0; i < peaches.length ; i++){
        peaches[i].move();
        peaches[i].display();
    }
   
    for (var e = 0; e < peaches2.length;e++){
        peaches2[e].move();
        peaches2[e].display();
    }
    //image(crown,x1,y1,60,60);
    //x1 = x1 + random(-15,15);
    //y1 = y1 - 5;   
    //if (y1 <0) {
    //    y1 = height;
    //}

    fill(0);
    textSize(56);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("hello world", 600, 600);
    //x, y necessary
    //fill first
       
}

function mousePressed() {
    var d = dist(mouseX, mouseY, 600, 600);
    if (d < 100) { 
      r = random(0,255);
      g = random(0,255);
      b = random(0,255);
    }
  }

class Peach{
    constructor(TempX,TempY,TempWidth,TempHeight,TempSpeed){
        this.x = TempX
        this.y = TempY
        this.width = TempWidth
        this.height = TempHeight
        this.speed = TempSpeed
    }
    display(){
        image(peach,this.x,this.y,this.width,this.height);


    }
    move(){
        this.x = this.x + random(-10,10);
        this.y = this.y - this.speed;
        if (this.y <0){
            this.y = height;
        }

    }

}


