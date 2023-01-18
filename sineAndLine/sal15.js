//palette:https://coolors.co/palette/011627-fdfffc-2ec4b6-e71d36-ff9f1c
function setup() {
  createCanvas(600, 600);
  background(1, 22, 39);
  strokeWeight(2);
}

let color1 = "#011627";
let color2 = "#FDFFFC";
let color3 = "#2EC4B6";
let color4 = "#E71D36";
let color5 = "#FF9F1C";

function draw() {
  let radius = noise(frameCount / 100) * 200 + 50;
  let rotationSpeed = noise(frameCount / 50) * 2 - 1;

  translate(width / 2, height / 2);
  rotate(rotationSpeed);

  for (let angle = 0; angle < 360; angle++) {
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    // Set stroke color based on angle
    let color =
      angle < 60
        ? color1
        : angle < 120
        ? color2
        : angle < 180
        ? color3
        : angle < 240
        ? color4
        : angle < 300
        ? color5
        : color1;
    stroke(color);
    line(x, y, -x, -y);
  }
}
