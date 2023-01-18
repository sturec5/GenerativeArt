function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 50);
  let cx = width / 2;
  let cy = height / 2;

  let r = 200;
  let numLines = 60;
  strokeWeight(3);
  stroke(0);

  let angleIncrement = TWO_PI / numLines;
  let maxLineLength = 150;
  let period = 100;

  let phaseShift = frameCount / 5;
  let startAngle = 0;
  let endAngle = startAngle + angleIncrement;

  for (let i = 0; i < numLines; i++) {
    let lineLength =
      maxLineLength *
      sin((TWO_PI * frameCount) / period + phaseShift + i * angleIncrement);

    line(
      cx + r * cos(startAngle),
      cy + r * sin(startAngle),
      cx + (r + lineLength) * cos(endAngle),
      cy + (r + lineLength) * sin(endAngle)
    );

    startAngle = endAngle;
    endAngle = startAngle + angleIncrement;
  }
  //makeNoise();
}
