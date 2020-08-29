var hr, min, sec;
var hrAngle, minAngle,secAngle;

function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 
  hr=hour();
  min=minute();
  sec=second();

  console.log(hr);
  console.log(min);
  console.log(sec);

  secAngle = map(sec,0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  translate(200,200);
  rotate(-90);

  push();
  rotate(secAngle);
  stroke("blue");
  strokeWeight(4);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(4);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(4);
  line(0,0,50,0);
  pop();


  noFill();
  stroke("blue");
  strokeWeight(10);
  arc(0,0,300,300,0,secAngle);

  stroke("green");
  strokeWeight(10);
  arc(0,0,280,280,0,minAngle);

  stroke("red");
  arc(0,0,260,260,0,hrAngle);

  
  drawSprites();
}