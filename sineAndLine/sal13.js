let colors = [
  "#590D22",
  "#800F2F",
  "#A4133C",
  "#C9184A",
  "#FF4D6D",
  "#FF758F",
  "#FF8FA3",
  "#FFB3C1",
  "#FFCCD5",
  "#FFF0F3",
];

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(10);
  strokeCap(SQUARE);
}

function draw() {
  background(242);

  translate(width / 2, height / 2);

  rotate(frameCount * 0.01);

  for (let i = 0; i < 360; i++) {
    stroke(colors[i % colors.length]);

    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = -150 * sin(radians(frameCount + i));
    line(x1, y1, x2, y2);

    rotate(1);
  }
}
