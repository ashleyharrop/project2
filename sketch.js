let canvas;
let painter;
let isDragging = false;

function setup() {
   createCanvas(700,700);

   painter = new Sprite();
   painter.img = "assets/painter.png";
   painter.scale = 2.5;

}

function draw() {
   background("#DBF4AD");

   if (
      mouseX > painter.position.x - painter.width / 2 &&
      mouseX < painter.position.x + painter.width / 2 &&
      mouseY > painter.position.y - painter.height / 2 &&
      mouseY < painter.position.y + painter.height / 2
    ) {
      // Change the cursor to indicate it's draggable
      cursor("grab");
    } else {
      cursor(); // Reset the cursor to the default
    }
  
    // If dragging, update the sprite's position
    if (isDragging) {
      painter.position.x = mouseX;
      painter.position.y = mouseY;
    }

}

function mousePressed() {
   // Check if the mouse is over the painter sprite
   if (
     mouseX > painter.position.x - painter.width / 2 &&
     mouseX < painter.position.x + painter.width / 2 &&
     mouseY > painter.position.y - painter.height / 2 &&
     mouseY < painter.position.y + painter.height / 2
   ) {
     isDragging = true;
   }
 }

 function mouseReleased() {
   // Stop dragging when the mouse is released
   isDragging = false;
 }

