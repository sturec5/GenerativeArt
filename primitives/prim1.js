let t = 0;
let angle = 0;

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(1, 22, 39);

  let x1 = width / 2 + cos(angle) * 200;
  let y1 = height / 2 + sin(angle) * 200;
  let x2 = width / 2 + cos(angle + PI / 2) * 200;
  let y2 = height / 2 + sin(angle + PI / 2) * 200;
  let x3 = width / 2 + cos(angle + PI) * 200;
  let y3 = height / 2 + sin(angle + PI) * 200;
  let x4 = width / 2 + cos(angle + PI * 1.5) * 200;
  let y4 = height / 2 + sin(angle + PI * 1.5) * 200;

  fill(253, 255, 252);
  ellipse(x1, y1, 50, 50);
  ellipse(x2, y2, 50, 50);
  ellipse(x3, y3, 50, 50);
  ellipse(x4, y4, 50, 50);

  for (let i = 0; i < 4; i++) {
    let x = lerp(x1, x2, i / 4);
    let y = lerp(y1, y2, i / 4);
    let s = sin(t + (i * PI) / 2);
    let scl = map(s, -1, 1, 50, 200);
    fill(46, 196, 182);
    ellipse(x, y, scl, scl);
  }

  for (let i = 0; i < 4; i++) {
    let x = lerp(x2, x3, i / 4);
    let y = lerp(y2, y3, i / 4);
    let s = sin(t + (i * PI) / 2);
    let scl = map(s, -1, 1, 50, 200);
    fill(231, 29, 54);
    ellipse(x, y, scl, scl);
  }

  for (let i = 0; i < 4; i++) {
    let x = lerp(x3, x4, i / 4);
    let y = lerp(y3, y4, i / 4);
    let s = sin(t + (i * PI) / 2);
    let scl = map(s, -1, 1, 50, 200);
    fill(255, 159, 28);
    ellipse(x, y, scl, scl);
  }

  for (let i = 0; i < 4; i++) {
    let x = lerp(x4, x1, i / 4);
    let y = lerp(y4, y1, i / 4);
    let s = sin(t + (i * PI) / 2);
    let scl = map(s, -1, 1, 50, 200);
    fill(253, 255, 252);
    ellipse(x, y, scl, scl);
  }

  t += 0.1;
  angle += 0.01;
}

function keyPressed() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}
