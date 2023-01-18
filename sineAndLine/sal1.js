function setup() {
  createCanvas(1000, 1000);
  smooth();
}

// https://coolors.co/palette/0b3954-087e8b-bfd7ea-ff5a5f-c81d25
let color1 = "#0B3954";
let color2 = "#087E8B";
let color3 = "#BFD7EA";
let color4 = "#FF5A5F";
let color5 = "#C81D25";

function draw() {
  background(0, 10);
  //makeNoise(); --use it if you decide on White bg
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        // Use sine function to create wave-like effect
        let x =
          200 + i * 120 + sin(frameCount * 0.1 + j * 0.5 + k * 0.035) * 62.5;
        let y =
          200 + j * 120 + sin(frameCount * 0.1 + i * 0.5 + k * 0.035) * 62.5;
        strokeWeight(5);
        if (i == 0) {
          stroke(color1);
        } else if (i == 1) {
          stroke(color2);
        } else if (i == 2) {
          stroke(color3);
        } else if (i == 3) {
          stroke(color4);
        } else {
          stroke(color5);
        }
        line(x, y, x + 120, y + 120);
      }
    }
  }
}