function setup() {
  createCanvas(600, 600);
  noStroke();
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(207, 97, 15);

  for (let i = 0; i < 75; i++) {
    fill(i * 3.6, 100, 100);
    const x = width / 2 + sin(frameCount / 50 + i) * 200;
    const y = height / 2 + cos(frameCount / 50 + i) * 200;
    ellipse(x, y, sin(frameCount / 10 + i) * 50, sin(frameCount / 10 + i) * 50);

    for (let j = 0; j < 50; j++) {
      fill(j * 7.2, 100, 100);
      const x2 = width / 2 + sin(frameCount / 25 + j) * 100;
      const y2 = height / 2 + cos(frameCount / 25 + j) * 100;
      ellipse(
        x2,
        y2,
        sin(frameCount / 5 + j) * 25,
        sin(frameCount / 5 + j) * 25
      );
    }
  }

  for (let k = 0; k < 25; k++) {
    fill(k * 14.4, 100, 100);
    const x3 = width / 2 + sin(frameCount / 12.5 + k) * 50;
    const y3 = height / 2 + cos(frameCount / 12.5 + k) * 50;
    ellipse(
      x3,
      y3,
      sin(frameCount / 2.5 + k) * 12.5,
      sin(frameCount / 2.5 + k) * 12.5
    );
  }
}

function mousePressed() {
  background(255);
}
