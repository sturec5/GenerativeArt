let x;
let y;
let radius;
let sineX;
let sineY;
let color1;
let color2;
let color3;
let color4;
let color5;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  radius = 200;
  sineX = 0;
  sineY = 0;
  color1 = color(1, 22, 39);
  color2 = color(253, 255, 252);
  color3 = color(46, 196, 182);
  color4 = color(231, 29, 54);
  color5 = color(255, 159, 28);
}

function draw() {
  background(1, 22, 39, 20);
  noFill();
  strokeWeight(2);
  stroke(color2);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let angle = radians(i);
    let sineValue = sin(angle + sineX);
    let xPos = x + radius * cos(angle);
    let yPos = y + radius * sineValue;
    vertex(xPos, yPos);
  }
  endShape(CLOSE);

  stroke(color3);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let angle = radians(i);
    let sineValue = sin(angle + sineY);
    let xPos = x + radius * sineValue;
    let yPos = y + radius * cos(angle);
    vertex(xPos, yPos);
  }
  endShape(CLOSE);

  stroke(color4);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let angle = radians(i);
    let sineValue = sin(angle + sineX + sineY);
    let xPos = x + radius * cos(angle);
    let yPos = y + radius * sineValue;
    vertex(xPos, yPos);
  }
  endShape(CLOSE);

  stroke(color5);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let angle = radians(i);
    let sineValue = sin(angle + sineX - sineY);
    let xPos = x + radius * sineValue;
    let yPos = y + radius * cos(angle);
    vertex(xPos, yPos);
  }
  endShape(CLOSE);

  sineX += 0.01;
  sineY += 0.03;
}
