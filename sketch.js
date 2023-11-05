let fireworks = [];
let systems = [];

function setup() {
  createCanvas(400, 600);

  gravity = createVector(0,0.2)
}

function draw() {
  background(51);
  for(let firework of fireworks){
  firework.applyForce(gravity);
  firework.update();
  firework.show();
  if(abs(firework.vel.y)<1){
  let mpos = createVector(firework.pos.x, firework.pos.y);
  let s = new ParticleSystem(mpos);
  systems.push(s);
  for(let s of systems){
  s.addParticle();
  s.add(gravity);
  s.run();
}  
}
}
}

function mousePressed(){
  let firework = new Firework(mouseX, height);
  fireworks.push(firework);
}