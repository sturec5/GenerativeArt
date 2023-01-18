let color1;
let color2;
let color3;
let color4;
let color5;

function setup() {
  createCanvas(400, 400);
  color1 = color(1, 22, 39);
  color2 = color(253, 255, 252);
  color3 = color(46, 196, 182);
  color4 = color(231, 29, 54);
  color5 = color(255, 159, 28);
  background(color1);
}

function draw() {
  translate(width / 2, height / 2);
  let numLines = 100;
  let angle = 360 / numLines;
  let radius = 150;
  let i = 0;
  let j = 0;
  while (i < numLines) {
    j = 0;
    while (j < numLines) {
      let x1 = cos(radians(angle * i)) * radius;
      let y1 = sin(radians(angle * i)) * radius;
      let x2 = cos(radians(angle * j)) * radius;
      let y2 = sin(radians(angle * j)) * radius;
      strokeWeight(1);
      if (i % 5 == 0 && j % 5 == 0) {
        stroke(color2);
      } else if (i % 4 == 0 && j % 4 == 0) {
        stroke(color3);
      } else if (i % 3 == 0 && j % 3 == 0) {
        stroke(color4);
      } else if (i % 2 == 0 && j % 2 == 0) {
        stroke(color5);
      } else {
        stroke(color2);
      }
      line(x1, y1, x2, y2);
      j++;
    }
    i++;
  }
}
