let colors = ["#011627", "#FDFFFC", "#2EC4B6", "#E71D36", "#FF9F1C"];

function setup() {
  createCanvas(600, 600);
  noFill();
  strokeWeight(3);
  strokeCap(ROUND);
  frameRate(30);
}

function draw() {
  background(1, 22, 39, 22);

  let centerX = width / 2;
  let centerY = height / 2;

  let radius = 150;
  let numLines = 30;
  let time = millis() / 1000;
  let angleIncrement = TWO_PI / numLines;
  let lineLength = radius / 2;

  stroke(random(colors));

  for (let i = 0; i < numLines; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        // calculate the x and y positions of the line endpoints
        let x1 = centerX + radius * cos(angleIncrement * i);
        let y1 = centerY + radius * sin(angleIncrement * i);
        let x2 =
          x1 + lineLength * cos(angleIncrement * i + time + (j * TWO_PI) / 2);
        let y2 =
          y1 + lineLength * sin(angleIncrement * i + time + (k * TWO_PI) / 2);
        line(x1, y1, x2, y2);
      }
    }
  }
}
