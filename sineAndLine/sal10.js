let palette = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(palette[0]);

  let numLines = 36;
  let angle = 360 / numLines;
  let radius = 200;

  for (let i = 0; i < numLines; i++) {
    let x1 = width / 2 + radius * cos(angle * i);
    let y1 = height / 2 + radius * sin(angle * i);
    let x2 =
      width / 2 + radius * cos(angle * i + 180 + sin(frameCount / 10) * 90);
    let y2 =
      height / 2 + radius * sin(angle * i + 180 + sin(frameCount / 10) * 90);

    stroke(palette[i % palette.length]);
    line(x1, y1, x2, y2);
  }
}
