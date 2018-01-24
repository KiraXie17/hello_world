var r,g,b;
var x,y;
 
function setup(){
    createCanvas(1200, 1200);
    r = random(255);
    g = random (255);
    b = random (255);
    x = width/ 2;
    y = height;
    
    
   

}
function draw(){
    background(255, 204, 0);
    stroke(r, g, b);
    fill(r, g, b,255);
    ellipse(600, 600, 400, 400);
    stroke(50);
    fill(125);
    ellipse(x,y,50,50)
    x = x + random(-10,10)
    y = y - 10
   


    if (y <0){
        y = height;

    }
  

   
    
}

function mousePressed() {
  
    var d = dist(mouseX, mouseY, 600, 600);
    if (d < 100) { 
      r = random(255);
      g = random(255);
      b = random(255);
    }
  }

