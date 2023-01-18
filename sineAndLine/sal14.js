function setup() {
  createCanvas(600, 600);
  colorMode(RGB);
}

function draw() {
  background(1, 22, 39);

  translate(width / 2, height / 2);

  let numLines = 36;

  for (let i = 0; i < numLines; i++) {
    let angle = map(i, 0, numLines, 0, TWO_PI);

    let x1 = 0;
    let y1 = 0;
    let x2 = cos(angle) * 200;
    let y2 = sin(angle) * 200;

    for (let j = 0; j < 20; j++) {
      let startX = map(j, 0, 20, x1, x2);
      let startY = map(j, 0, 20, y1, y2);
      let endX = map(j + 1, 0, 20, x1, x2);
      let endY = map(j + 1, 0, 20, y1, y2);

      let sw = map(sin(frameCount * 0.05 + j), -1, 1, 1, 15); 

      if (j % 4 == 0) {
        stroke(253, 255, 252);
      } else if (j % 4 == 1) {
        stroke(46, 196, 182);
      } else if (j % 4 == 2) {
        stroke(231, 29, 54);
      } else {
        stroke(255, 159, 28);
      }

      strokeWeight(sw);
      line(startX, startY, endX, endY);
    }
  }
}
