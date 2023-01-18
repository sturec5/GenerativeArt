let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let angle;
let angleIncrement;
let distance;
let distanceIncrement;
let color1;
let color2;
let color3;
let color4;
let color5;

function setup() {
  createCanvas(800, 800);
  angle = 0;
  angleIncrement = 0.02;
  distance = 0;
  distanceIncrement = 0.1;
  color1 = color(1, 22, 39);
  //color2 = color(253, 255, 252);
  color2 = color(1, 22, 39);
  color3 = color(46, 196, 182);
  color4 = color(231, 29, 54);
  color5 = color(255, 159, 28);
  background(color1);
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 0; i < 50; i++) {
    angle += angleIncrement;
    distance += distanceIncrement;
    x1 = sin(angle) * distance;
    y1 = cos(angle) * distance;
    x2 = sin(angle + PI / 3) * distance;
    y2 = cos(angle + PI / 3) * distance;
    x3 = sin(angle + (PI / 3) * 2) * distance;
    y3 = cos(angle + (PI / 3) * 2) * distance;
    noFill();
    strokeWeight(2);
    if (i % 5 == 0) {
      stroke(color2);
    } else if (i % 5 == 1) {
      stroke(color3);
    } else if (i % 5 == 2) {
      stroke(color4);
    } else if (i % 5 == 3) {
      stroke(color5);
    } else {
      stroke(color2);
    }
    triangle(x1, y1, x2, y2, x3, y3);
    if (abs(x1) > width / 2 || abs(y1) > height / 2) {
      angle = 0;
      distance = 0;
    }
  }
}

// fix later
function mousePressed() {
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < 10; k++) {
      angle += angleIncrement;
      distance += distanceIncrement;
      x1 = sin(angle) * distance;
      y1 = cos(angle) * distance;
      x2 = sin(angle + PI / 3) * distance;
      y2 = cos(angle + PI / 3) * distance;
      x3 = sin(angle + (PI / 3) * 2) * distance;
      y3 = cos(angle + (PI / 3) * 2) * distance;
      noFill();
      strokeWeight(2);
      if (k % 5 == 0) {
        stroke(color2);
      } else if (k % 5 == 1) {
        stroke(color3);
      } else if (k % 5 == 2) {
        stroke(color4);
      } else if (k % 5 == 3) {
        stroke(color5);
      } else {
        stroke(color2);
      }
      triangle(x1, y1, x2, y2, x3, y3);
      if (abs(x1) > width / 2 || abs(y1) > height / 2) {
        angle = 0;
        distance = 0;
      }
    }
  }
}