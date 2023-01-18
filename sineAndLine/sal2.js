let x;
let y;
let r;
let color1;
let color2;
let color3;
let color4;
let color5;

function setup() {
  createCanvas(900, 900);
  r = 300;
  //https://coolors.co/palette/ffbe0b-fb5607-ff006e-8338ec-3a86ff
  color1 = color("#264653");
  color2 = color("#2a9d8f");
  color3 = color("#e9c46a");
  color4 = color("#f4a261");
  color5 = color("#e76f51");
}

function draw() {
  background(21, 20);

  x = width / 2;
  y = height / 2;

  for (let i = 0; i < 360; i += 36) {
    let angle = radians(i);
    let x1 = x + r * cos(angle);
    let y1 = y + r * sin(angle);
    let x2 = x + r * cos(angle + radians(frameCount));
    let y2 = y + r * sin(angle + radians(frameCount));
    let c = lerpColor(color1, color5, i / 360);
    stroke(c);
    line(x1, y1, x2, y2);
  }

  for (let i = 0; i < 360; i += 36) {
    let angle = radians(i);
    let x1 = x + r * cos(angle);
    let y1 = y + r * sin(angle);
    let x2 = x + r * cos(angle + radians(frameCount * 2));
    let y2 = y + r * sin(angle + radians(frameCount * 2));
    let c = lerpColor(color2, color4, i / 360);
    stroke(c);
    line(x1, y1, x2, y2);
  }

  for (let i = 0; i < 360; i += 36) {
    let angle = radians(i);
    let x1 = x + r * cos(angle);
    let y1 = y + r * sin(angle);
    let x2 = x + r * cos(angle + radians(frameCount * 3));
    let y2 = y + r * sin(angle + radians(frameCount * 3));
    let c = lerpColor(color3, color1, i / 360);
    stroke(c);
    line(x1, y1, x2, y2);
  }
}
