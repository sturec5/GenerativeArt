let angle = 0;

function setup() {
  createCanvas(600, 600);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(1, 22, 39,20);

  for (let i = 0; i < 360; i += 20) {
    let x1 = width/2 + cos(radians(i)) * 100;
    let y1 = height/2 + sin(radians(i)) * 100;
    let x2 = width/2 + cos(radians(i + angle)) * 100;
    let y2 = height/2 + sin(radians(i + angle)) * 100;
    let c = lerpColor(color(253, 255, 252), color(46, 196, 182), (i % 80) / 80);
    stroke(c);
    line(x1, y1, x2, y2);
  }

  for (let i = 0; i < 360; i += 20) {
    let x1 = width/2 + cos(radians(i)) * 150;
    let y1 = height/2 + sin(radians(i)) * 150;
    let x2 = width/2 + cos(radians(i + angle)) * 150;
    let y2 = height/2 + sin(radians(i + angle)) * 150;
    let c = lerpColor(color(46, 196, 182), color(231, 29, 54), (i % 80) / 80);
    stroke(c);
    line(x1, y1, x2, y2);
  }

  for (let i = 0; i < 360; i += 20) {
    let x1 = width/2 + cos(radians(i)) * 200;
    let y1 = height/2 + sin(radians(i)) * 200;
    let x2 = width/2 + cos(radians(i + angle)) * 200;
    let y2 = height/2 + sin(radians(i + angle)) * 200;
    let c = lerpColor(color(231, 29, 54), color(255, 159, 28), (i % 80) / 80);
    stroke(c);
    line(x1, y1, x2, y2);
  }

  angle += 0.5;
}
