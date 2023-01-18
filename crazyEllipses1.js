var gridSize = 100; 
var imgSize = 900; 

var colorPalette = [
  [255, 190, 11],
  [251, 86, 7],
  [255, 0, 110],
  [131, 56, 236],
  [58, 134, 255],
];

function setup() {
  createCanvas(imgSize, imgSize);
  background(255); // set background color to white?
  noStroke(); 
}

function draw() {
  for (var x = 0; x < imgSize; x += gridSize) {
    for (var y = 0; y < imgSize; y += gridSize) {
      var circleSize = 100 + 100 * sin(frameCount / 100); 

      switch (1) {
        case 1:
          var currentColor =
            colorPalette[(x / gridSize + y / gridSize) % colorPalette.length];
          break;
        case 2:
          var currentColor = colorPalette[floor(random(colorPalette.length))]; 
          break;
        case 3:
          var firstValue = random(150, 255); // R
          var secondValue = random(150, 255); // G
          var thirdValue = random(150, 255);  // B
          var currentColor = [firstValue, secondValue, thirdValue]; 

          break;
      }
      var transparantValue = random(0, 100);
      fill(currentColor[0], currentColor[1], currentColor[2], transparantValue);
      ellipse(x, y, circleSize, circleSize); 
    }
  }
}
