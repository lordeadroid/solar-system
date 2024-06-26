const sun = () => {
  push();
  fill("yellow");
  rotateZ(radians(6));
  rotateY(frameCount * 100);
  sphere(75);
  pop();
};

function setup() {
  createCanvas(1900, 940, WEBGL);
  normalMaterial();
}

function draw() {
  background("black");

  sun();

  Object.values(planetsData).forEach(planet);
}
