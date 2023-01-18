function setup() {
    createCanvas(400, 400);
    noFill();
    strokeWeight(2);
  }
  
  function draw() {
    background(1, 22, 39);
    let x = width / 2;
    let y = height / 2;
    let r = 150;
  
    let numLines = 50;
    let angleStep = 360 / numLines;
    for (let i = 0; i < numLines; i++) {
      let angle = radians(angleStep * i);
      let x1 = x + r * cos(angle);
      let y1 = y + r * sin(angle);
      let x2 = x + r * cos(angle + frameCount / 10);
      let y2 = y + r * sin(angle + frameCount / 10);
  
      let inter = map(i, 0, numLines, 0, 1);
      let color1 = color(253, 255, 252);
      let color2 = color(46, 196, 182);
      let color3 = color(231, 29, 54);
      let color4 = color(255, 159, 28);
      if (inter < 0.25) {
        stroke(lerpColor(color1, color2, inter / 0.25));
      } else if (inter < 0.5) {
        stroke(lerpColor(color2, color3, (inter - 0.25) / 0.25));
      } else if (inter < 0.75) {
        stroke(lerpColor(color3, color4, (inter - 0.5) / 0.25));
      } else {
        stroke(lerpColor(color4, color1, (inter - 0.75) / 0.25));
      }
      line(x1, y1, x2, y2);
    }
  }