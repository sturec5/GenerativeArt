let xoff = 0;
let yoff = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(1, 22, 39, 10);
  stroke(255);
  noFill();
  beginShape();
  let xoff = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = noise(xoff, yoff) * height;
    vertex(x, y);
    xoff += 0.1;
  }
  yoff += 0.01;
  endShape();
}
