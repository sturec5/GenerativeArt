const numLines = 50;
const lineLength = 50;
const lineSpacing = 10;
const colorPalette = [
  [1, 22, 39],
  [253, 255, 252],
  [46, 196, 182],
  [231, 29, 54],
  [255, 159, 28],
];

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(1, 22, 39, 20);

  for (let i = 0; i < numLines; i++) {
    const yPos = lineSpacing + i * lineSpacing;
    const colorIndex = i % colorPalette.length;
    stroke(colorPalette[colorIndex]);

    for (let j = 0; j < 10; j++) {
      const xPos = lineLength + j * lineLength;
      const angle = map(sin(frameCount + i), -1, 1, 0, 180);
      push();
      translate(xPos, yPos);
      rotate(angle);
      line(-lineLength / 2, 0, lineLength / 2, 0);
      pop();
    }
  }
}
