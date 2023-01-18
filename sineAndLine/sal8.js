function setup() {
  createCanvas(400, 400);
  background(1, 22, 39);
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  //  clear();
  background(1, 22, 39, 20);

  let numLines = 60;
  let maxLength = 200;
  let color1 = color(253, 255, 252);
  let color2 = color(46, 196, 182);
  let lerpAmt = 0;

  for (let i = 0; i < numLines; i++) {
    let length = maxLength * sin(i * 6 + frameCount);
    let angle = (i * 360) / numLines;
    let x1 = width / 2 + length * cos(angle);
    let y1 = height / 2 + length * sin(angle);
    let x2 = width / 2 + length * cos(angle + 180);
    let y2 = height / 2 + length * sin(angle + 180);
    lerpAmt = map(i, 0, numLines, 0, 1);
    stroke(lerpColor(color1, color2, lerpAmt));
    line(x1, y1, x2, y2);
  }

  numLines = 30;
  maxLength = 100;
  color1 = color(231, 29, 54);
  color2 = color(255, 159, 28);
  lerpAmt = 0;

  for (let i = 0; i < numLines; i++) {
    let length = maxLength * sin(i * 12 + frameCount / 2);
    let angle = (i * 360) / numLines;
    let x1 = width / 2 + length * cos(angle);
    let y1 = height / 2 + length * sin(angle);
    let x2 = width / 2 + length * cos(angle + 180);
    let y2 = height / 2 + length * sin(angle + 180);
    lerpAmt = map(i, 0, numLines, 0, 1);
    stroke(lerpColor(color1, color2, lerpAmt));
    line(x1, y1, x2, y2);
  }

  numLines = 15;
  maxLength = 50;
  color1 = color(1, 22, 39);
  color2 = color(253, 255, 252);
  lerpAmt = 0;

  for (let i = 0; i < numLines; i++) {
    let length = maxLength * sin(i * 24 + frameCount / 4);
    let angle = (i * 360) / numLines;
    let x1 = width / 2 + length * cos(angle);
    let y1 = height / 2 + length * sin(angle);
    let x2 = width / 2 + length * cos(angle + 180);
    let y2 = height / 2 + length * sin(angle + 180);
    lerpAmt = map(i, 0, numLines, 0, 1);
    stroke(lerpColor(color1, color2, lerpAmt));
    line(x1, y1, x2, y2);
  }
}
