//Pattern
//creates random pattern everytime called
let stWeight;
let palette;

function setup() {
  createCanvas(600, 600);
  noLoop();
  stWeight = random(1, 5);
  strokeWeight(stWeight);

  if (random() > 0.5) {
    palette = [
      color(255, 190, 11),
      color(251, 86, 7),
      color(255, 0, 110),
      color(131, 56, 236),
      color(58, 134, 255),
    ];
  } else {
    palette = [
      color(1, 22, 39),
      color(253, 255, 252),
      color(46, 196, 182),
      color(231, 29, 54),
      color(255, 159, 28),
    ];
  }
}

function draw() {
  background(255);
  for (let i = 0; i < width; i += stWeight * 4) {
    for (let j = 0; j < height; j += stWeight * 4) {
      let c = palette[int(random(palette.length))];
      fill(c);
      rect(i, j, stWeight * 4, stWeight * 4);
    }
  }
  for (let k = 0; k < width; k += stWeight * 4) {
    let c = palette[int(random(palette.length))];
    stroke(c);
    for (let l = 0; l < height; l += stWeight) {
      let x = k;
      let y = l + sin(frameCount / 20 + k) * 20;
      point(x, y);
    }
  }
}
