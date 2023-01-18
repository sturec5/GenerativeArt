let radius;
let angle = 0;

function setup() {
  createCanvas(900, 900);
  radius = height / 2 - 100;
  smooth();
}

function draw() {
  background(1, 22, 39, 20);
  noFill();
  stroke(255);
  translate(width / 2, height / 2);

  // circle of lines
  for (let i = 0; i < 360; i += 5) {
    let x1 = radius * cos(radians(i));
    let y1 = radius * sin(radians(i));
    let x2 = (radius + 50 * sin(angle + radians(i))) * cos(radians(i));
    let y2 = (radius + 50 * sin(angle + radians(i))) * sin(radians(i));
    line(x1, y1, x2, y2);
  }

  // concentric circles
  for (let j = radius; j > 0; j -= 75) {
    ellipse(20 * sin(angle) + 0, 20 * cos(angle) + 0, j);
  }

  // pulsing dots on the circle
  for (let k = 0; k < 360; k += 45) {
    let x = (radius + 20 * sin(angle + radians(k))) * cos(radians(k));
    let y = (radius + 20 * sin(angle + radians(k))) * sin(radians(k));
    fill(255);
    ellipse(x, y, 10, 10);
  }

  angle += 0.05;
  //  saveJpg(); 
}

function saveJpg() {
  if (frameCount < 200) {
    saveCanvas("sal0/frame-" + frameCount, "jpg");
  }
}

function mousePressed() {
  let date = new Date();
  saveCanvas("screenshot_" + frameCount + "_" + date.toISOString(), "png");
  frameCount++;
}