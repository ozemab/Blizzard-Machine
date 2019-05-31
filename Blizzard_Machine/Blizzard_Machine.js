//BLIZZARD MACHINE

//Circle Class
class Circle {
//x location, y location, and color can be modified using these arguments
  constructor (tempCXLoc, tempCYLoc, tempCsize, tempCc) {
    this.CXLoc = tempCXLoc;
    this.CYLoc = tempCYLoc;
    this.Cc = tempCc;
    this.Csize = tempCsize;
  }

display() {
    fill(this.Cc);
    ellipse(this.CXLoc, this.CYLoc, this.Csize, this.Csize); 
  } 
  
}

//multiple arrays containing 200 circles
var theCircles = 200;

var circles1;
var circles2;
var circles3;
var circles4; 
var circles5;
var circles6;


function setup() {
//Pale blue background
  createCanvas(800, 600);
  background (255);

circles1 = new Circle(theCircles);
circles2 = new Circle(theCircles);
circles3 = new Circle(theCircles);
circles4 = new Circle(theCircles);
circles5 = new Circle(theCircles);
circles6 = new Circle(theCircles);

//Fill the array 
  for (let i = 0; i < theCircles; i++) {
    //display white, blue, and purple circles (snow) of varying opacities in random places througout the window

    //white
    circles1[i] = new Circle (random (width), random (height), random(5, 40), color (255, 255, 255, random (0, 100)));
    //pale blue
    circles2[i] = new Circle (random (width), random (height), random(5, 40), color (212, 236, 255, random (0, 100)));
    //light blue
    circles3[i] = new Circle (random (width), random (height), random(5, 40), color (137, 206, 255, random (0, 100)));
    //light purple
    circles4[i] = new Circle (random (width), random (height), random(5, 40), color (130, 174, 255, random (0, 100)));
    //dark purple
    circles5[i] = new Circle (random (width), random (height), random(5, 40), color (91, 100, 255, random (0, 100)));
    //dark blue
    circles6[i] = new Circle (random (width), random (height), random(5, 40), color (27, 63, 175, random (0, 100)));
  }
}


function draw() {
 noStroke();
  smooth();

  //display the circles (snow)
  for (let i = 0; i < theCircles; i++) {
    
//when mouse is moved ellipses appear at the position of the mouse rotating randomly up to 90 degrees 
//moving the mouse to different positions on the screen creates different blizzard effects
  translate(mouseX, mouseY);
  rotate (radians (random (80))); 
  ellipse (mouseX, mouseY, mouseX, mouseY);


    //starting at 3 seconds different colored snow appears every three seconds without input from the user
    //time of day changes from daytime to nighttime 
    if (millis() > 500) {
      circles1[i].display();
    }
    if (millis() > 3000) {
      circles2[i].display();
    }
    if (millis() > 7000) {
      circles3[i].display();
    }
    if (millis() > 10000) {
      circles4[i].display();
    }
    if (millis() > 13000) {
      circles5[i].display();
    }
    if (millis() > 16000) {
      circles6[i].display();
    }
    
  }
}
