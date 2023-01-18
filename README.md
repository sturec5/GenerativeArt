# GenerativeArt 
They are not super complex p5.js scripts but gives you a calm feeling when getting started creative coding.
These scripts are free to use and MIT licensed, so feel free to use them in any way you'd like. Just would love to see your works.

I hope they can be helpful to you in your creative coding projects.
- [Sturec Website](https://sturec.art/)
- [Sturec Twitter](https://twitter.com/sturec5)

## How to Use
Each script is a standalone file that can be run on any website or local environment that supports p5js. 
I use these:
- [p5.js Editor](https://editor.p5js.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

To use a script on **Visual Studio Code**, simply include the p5js library, the script file name and the script path correctly in your HTML file, and the script will run automatically. The necessary files mentioned below is **already included in this repo**. 
However here are the basic steps just in case you will use some other repos or scripts, idk. 

1. Include the p5.js library in your HTML file by adding the following script tag to the head of the HTML file:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
```
2. Create a sketch.js file in the same directory as your HTML file. This is where you will write your p5.js code.
3. Link the sketch.js file to your HTML file by adding the following script tag to the body of your HTML file:
```html
<script src="sketch.js"></script>
```
4. Inside the sketch.js file, create a function called "setup" and another called "draw". The "setup" function is executed once at the beginning, and the "draw" function is executed repeatedly, creating a loop.
5. Inside the "setup" function, write or copy any code that you want to be executed once at the beginning of the sketch, such as creating a canvas.
6. Inside the "draw" function, write any code that you want to be executed repeatedly, such as drawing shapes or updating variables.
7. Open the HTML file in a web browser to run the sketch.
Example code I left in the current sketch.js:
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(1, 22, 39);
  fill(46, 196, 182);
  ellipse(200, 200, 50, 50);
}
```


Note: Make sure to use the latest version of p5.js library.


## Some Examples of the Scripts
- **/sinAndLine/sal0.js** : Animated series of lines and shapes that pulse and rotate on the canvas. The shapes include a circle of lines, concentric circles, and pulsing dots on the circle.
<img src="https://user-images.githubusercontent.com/120736771/212080219-f6aca132-0e93-4421-b294-9d86b018c81e.png" width="400" height="400" />


- **/arcs/arc0.js** : Animation of lines and circles that pulse and move in a circular pattern. 
<img src="https://user-images.githubusercontent.com/120736771/212085692-b1e62a3d-80d3-4553-ba7e-34d3876928de.png" width="400" height="400" />


- **/particles/par0.js** : Randomly generated particles that move around the screen, change color, and connect to each other with lines when they are within a certain distance of one another. 
<img src="https://user-images.githubusercontent.com/120736771/212092157-a4075e9a-65e7-4d6f-9525-047a87365548.png" height="400" />



To Get Screenshots of the Canvas you can embed this function:
```javascript
function mousePressed() {
  let date = new Date();
  saveCanvas("screenshot_" + frameCount + "_" + date.toISOString(), "png");
  frameCount++;
}
```
It uses the frameCount variable to keep track of the number of screenshots taken and the Date() object to get the current date and time, which is then passed to the toISOString() method to be formatted as a string.
The function saves the canvas with a filename in the format "screenshot_FRAMENUMBER_DATE".



### Feedback
I would love to hear your feedback on these scripts, or see what you've created with them! Feel free to reach out to me via [Twitter](https://twitter.com/sturec5) to share your thoughts.

Thank you for visiting my repo and happy creative coding!
