// Thanks to Daniel Shiffman
let xoff = 0;
let yoff = 0;
let zoff = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);

  let xoff = 0;
  for (let x = 10; x < width; x += 10) {
    let yoff = 0;
    for (let y = 10; y < height; y += 10) {
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      stroke(255);
      push();
      translate(x, y);
      rotate(v.heading());
      line(0, 0, 10, 0);
      pop();
      yoff += 0.1;
    }
    xoff += 0.1;
  }
  zoff += 0.01;
}
