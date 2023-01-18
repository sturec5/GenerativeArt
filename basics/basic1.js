function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(255);
  strokeWeight(1);
}

function draw() {
  background(0, 20);
  translate(width / 2, height / 2);
  for (let i = 0; i < 360; i += 45) {
    push();
    rotate(radians(i));
    for (let j = 0; j < 50; j++) {
      let x = j * 8;
      let y = sin(radians(frameCount + j * 2)) * 50;
      line(x, y, x, -y);
    }
    pop();
  }
}
