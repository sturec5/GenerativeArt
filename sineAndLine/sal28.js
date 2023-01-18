let color1;
let color2;
let color3;
let color4;
let color5;

let numLines = 60;
let lineLength = 230;
let lineSpacing = 15;
let startX;
let startY;

function setup() {
  createCanvas(600, 600);
  color1 = color(1, 22, 39, 50);
  color2 = color(253, 255, 252);
  color3 = color(46, 196, 182);
  color4 = color(231, 29, 54);
  color5 = color(255, 159, 28);
  startX = 0;
  startY = height / 3;
  strokeWeight(2);
}

function draw() {
  background(color1);
  
  for (let i = 0; i < numLines; i++) {
    let angle = map(i, 0, numLines, 0, TWO_PI);
    let sinVal = sin(angle + frameCount * 0.1);
    let y = startY + sinVal * 50;
    let x = startX + i * lineSpacing;
    let colorVal = map(sinVal, -1, 1, 0, 1);
    let c;
    if (colorVal < 0.2) {
      c = lerpColor(color2, color3, colorVal / 0.2);
    } else if (colorVal < 0.4) {
      c = lerpColor(color3, color4, (colorVal - 0.2) / 0.2);
    } else if (colorVal < 0.6) {
      c = lerpColor(color4, color5, (colorVal - 0.4) / 0.2);
    } else if (colorVal < 0.8) {
      c = lerpColor(color5, color3, (colorVal - 0.6) / 0.2);
    } else {
      c = lerpColor(color3, color2, (colorVal - 0.8) / 0.2);
    }
    stroke(c);
    line(x, y, x, y + lineLength);
  }
}
