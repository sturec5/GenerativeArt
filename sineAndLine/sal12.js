function setup() {
  createCanvas(600, 600);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(1, 22, 39, 10);

  let t = frameCount / 60;
  let angle = map(sin(t), -1, 1, 0, TWO_PI);

  let radius = 200;
  radius += sin(t / 2) * 50;

  stroke(map(angle, 0, TWO_PI, 0, 360), 29, 54, 100);

  for (let a = 0; a < TWO_PI; a += TWO_PI / 24) {
    let x1 = width / 2 + cos(a) * radius;
    let y1 = height / 2 + sin(a) * radius;
    let x2 = width / 2 + cos(a + angle) * radius;
    let y2 = height / 2 + sin(a + angle) * radius;
    line(x1, y1, x2, y2);
  }

  stroke(255, 159, 28, 100);
  ellipse(width / 2, height / 2, radius * 2);
}
