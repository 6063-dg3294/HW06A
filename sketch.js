let leaves = [];
let trunks = [];
let parameter = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1000; i += 50){
    parameter.push(i)
  }
  for (let i = 0; i < 300; i++){
    leaves.push(new Leaf(random(width), random(height)));
  }

  // for (let i = 0; i < 1000; i++){
  //   trunks.push(new Trunk(parameter[i], random(500, height)))
  // }

  frameRate(30)


}

function draw() {
  background(255);
  // draw the pupil
  fill(232, 214, 189)
  drawIris(width / 2, height / 2, 400);
  drawIris(width / 2, height / 2, 450 )
  drawIris(width / 2, height / 2, 180 )
  // draw the eye frame
  drawFrame(width / 2, height / 2, 200)


  // for (let trunk of trunks){
  //   trunk.display();
  // }
  
  for (let leaf of leaves){
    leaf.display();
    leaf.shake();

  }
  


}

// class Trunk{
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//     this.initialY = y
//   }
//   display(){
//     fill(79,63,48);
//     textSize(100);
//     text("trunk", this.x, this.y);
//   }
// }

class Leaf {
  constructor(x, y){
    this.x = x; 
    this.y = y;
    this.initialY = y;
  }
  display() {
    fill(50, 150, 50);
    textSize(10)
    text("leaf", this.x, this.y);
  }
  
  shake() {
    let counter = frameCount
    this.y = this.initialY + 100 * sin(counter * 0.01 + this.x * 0.5);
    counter += 1
    

    }
}


function drawIris(x, y, size) {
  let numPetals = 120;
  let angleIncrement = 360 / numPetals;
  let radius = size / 3;

  for (let i = 0; i < numPetals; i++) {
    let angle = i * angleIncrement;
    let xOffset = radius * cos(radians(angle));
    let yOffset = radius * sin(radians(angle));
    let newX = x + xOffset;
    let newY = y + yOffset
    textSize(30)
    textFont("monospace");
    text("X", newX, newY);

    newY = height/2

    
  }
}

function drawFrame(x, y, size) {
  let numPetals = 120;
  let angleIncrement = 360 / numPetals;
  let radius = size / 3;

  for (let i = 0; i < numPetals; i++) {
    let angle = i * angleIncrement;
    let xOffset = radius * cos(radians(angle));
    let yOffset = radius * sin(radians(angle));
    let newX = x + xOffset * 9;
    let newY = y + yOffset * 4
    textSize(15)
    text("X", newX, newY);

    
  }
}



