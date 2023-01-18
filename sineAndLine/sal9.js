const totalLines = 360; 
const radius = 200; 
const centerX = 450; 
const centerY = 450; 

const colors = [
  [1, 22, 39],
  [253, 255, 252],
  [46, 196, 182],
  [231, 29, 54],
  [255, 159, 28],
];

function setup() {
  createCanvas(900, 900);
  strokeWeight(2);
  noFill();
  strokeCap(SQUARE);
}

function draw() {
  background(colors[0]); 
 
  for (let i = 0; i < totalLines; i++) {
    let angle = map(i, 0, totalLines, 0, TWO_PI);
    for (let j = 0; j < colors.length; j++) {
      stroke(colors[j]);

      let distance =
        radius + radius * sin(angle + frameCount * 0.1 + (j * PI) / 2);

      line(
        centerX + cos(angle) * distance,
        centerY + sin(angle) * distance,
        centerX + cos(angle) * radius,
        centerY + sin(angle) * radius
      );
    }
  }
}
