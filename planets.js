const planet = ({ distance, speed, color }) => {
  push();
  fill(color);
  rotateY((millis() / 50000) * speed);
  translate(distance * 120, 0, 0);
  sphere(40);
  pop();
};
