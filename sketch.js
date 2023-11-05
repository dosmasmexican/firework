function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(51);
  let gravity = createVector(0,0.2)
  firework.applyForce(gravity);
  firework.update();
  firework.show();
}

function mousePressed(){
  let firework = new Firework(mouseX, height);
}