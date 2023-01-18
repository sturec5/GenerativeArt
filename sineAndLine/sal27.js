//patterny feeling
let angle;
let offset;
let scalar;
let speed;

let color1;
let color2;
let color3;
let color4;
let color5;

function setup() {
  createCanvas(400, 400);
  angle = 0;
  offset = 0;
  scalar = 70;
  speed = 0.05;
  color1 = color(1, 22, 39);
  color2 = color(253, 255, 252);
  color3 = color(46, 196, 182);
  color4 = color(231, 29, 54);
  color5 = color(255, 159, 28);
}

function draw() {
  background(1, 22, 39);
  noFill();

  for (let i = 0; i <= width; i += 50) {
    for (let j = 0; j <= height; j += 50) {
      for (let k = 0; k < 360; k += 45) {
        let x1 = i + scalar * cos(radians(k + angle + offset));
        let y1 = j + scalar * sin(radians(k + angle + offset));
        let x2 = i + scalar * cos(radians(k + angle + offset + 180));
        let y2 = j + scalar * sin(radians(k + angle + offset + 180));
        let c = lerpColor(color1, color2, (k % 360) / 360);
        c = lerpColor(c, color3, (k % 360) / 360);
        c = lerpColor(c, color4, (k % 360) / 360);
        c = lerpColor(c, color5, (k % 360) / 360);
        stroke(c);
        line(x1, y1, x2, y2);
      }
    }
  }

  angle += speed;
  offset += speed;
}
