const planet = ({ distance, speed, color, orbitalTilt }) => {
  push();
  fill(color);
  rotateY((millis() / 50000) * speed);
  rotateZ(radians(orbitalTilt));
  translate(distance * 120, 0, 0);
  sphere(40);
  pop();
};
