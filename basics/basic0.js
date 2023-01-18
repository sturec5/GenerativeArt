let angle = 0;
let scaleFactor = 1;
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  fill(0, 0, 100, 20);
}
function draw() {
  background(0, 0, 0);
  translate(width / 2, height / 2);
  rotate(angle);
  angle += 0.01;
  let radius = 200;
  let h = random(360);

  switch (1) {
    case 0:
      for (let i = 0; i < 360; i++) {
        let x = cos(i) * radius;
        let y = sin(i) * radius;
        let d = dist(0, 0, x, y);
        let offset = map(d, 0, radius, 0, TWO_PI);
        let size = map(sin(angle + offset), -1, 1, 5, 50);
        ellipse(x, y, size, size);
      }
      break;
    case 1:
      for (let i = 0; i < 360; i++) {
        let x = cos(i) * radius;
        let y = sin(i) * radius;
        let d = dist(0, 0, x, y);
        let offset = map(d, 0, radius, 0, TWO_PI);
        let size = map(sin(angle + offset), -1, 1, 5, 50);

        push();
        translate(x, y);
        rotate(angle + offset);
        scale(scaleFactor);
        arc(0, 0, size, size, 0, HALF_PI);
        rotate(HALF_PI);
        arc(0, 0, size, size, 0, HALF_PI);
        pop();
      }

      scaleFactor = constrain(scaleFactor + 0.001, 0.9, 1.1);
      break;
  }
}
