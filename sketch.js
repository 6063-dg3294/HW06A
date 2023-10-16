let leaves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++){
    leaves.push(new Leaf(random(width), random(height)));
  }
  frameRate(10)


}

function draw() {
  background(255);
  for (let leaf of leaves){
    leaf.display();
    leaf.shake()

  }
}

class Leaf {
  constructor(x, y){
    this.x = x; 
    this.y = y;
    this.initialY = y;
  }
  display() {
    fill(50, 150, 50);
    text("leaf", this.x, this.y);
  }
  
  shake() {
    this.y = this.initialY + 3 * sin(frameCount * 0.1 + this.x * 0.1);
    }
}


