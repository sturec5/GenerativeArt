//SpinningStar
/**
 * 
 * p5.Polar.min.js created by Liz Peng needed
 * 
 **/

let angle = 0;
let colors;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 255, 255, 100, 100);
  noStroke();
  fill(255);
  colors = [
    color(255, 190, 11),
    color(251, 86, 7),
    color(255, 0, 110),
    color(131, 56, 236),
    color(58, 134, 255),
  ];
}

function draw() {
  background(0);

  setCenter(width / 2, height / 2);
  //makeNoise();
  for (let i = 0; i < 20; i++) {
    let a = i * 18 + angle;
    let r = 100 + 50 * sin((a * 2 * PI) / 360);

    fill(colors[i % 5]);
    polarTriangle(a, 50, r);
  }

  angle += 2;
}
