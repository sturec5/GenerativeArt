let rowCount = 0;
let colCount = 0;
let rowWidth;
let colHeight;

let strokeColor;
let fillColor;

let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("display", "block");
  canvas.style("position", "absolute");
  canvas.style("top", "0");
  canvas.style("left", "0");

  rowCount = int(random(5, 10));
  colCount = int(random(5, 10));

  rowWidth = windowWidth / rowCount;
  colHeight = windowHeight / colCount;

  strokeWeight(2);
}

function draw() {
  background(253, 255, 252);

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      let x = i * rowWidth;
      let y = j * colHeight;

      let c = color(1, 22, 39);
      if (i % 2 == 0) {
        c = color(46, 196, 182);
      }
      if (j % 2 == 0) {
        c = color(231, 29, 54);
      }

      strokeColor = lerpColor(c, color(255, 159, 28), sin(frameCount / 50));
      fillColor = lerpColor(c, color(255, 159, 28), cos(frameCount / 50));

      stroke(strokeColor);
      fill(fillColor);

      rect(x, y, rowWidth, colHeight);

      let noiseVal = noise(x * 0.01, y * 0.01, frameCount * 0.01);
      let angle = map(noiseVal, 0, 1, 0, TWO_PI);

      let x1 = x + rowWidth / 2 + (cos(angle) * rowWidth) / 4;
      let y1 = y + colHeight / 2 + (sin(angle) * colHeight) / 4;
      let x2 = x + rowWidth / 2 + (cos(angle + PI) * rowWidth) / 4;
      let y2 = y + colHeight / 2 + (sin(angle + PI) * colHeight) / 4;

      strokeWeight(4);
      stroke(255, 255, 255);
      line(x1, y1, x2, y2);
      strokeWeight(2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
