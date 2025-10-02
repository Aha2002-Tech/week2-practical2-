function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  fill(255, 0, 150); // pink
}

function draw() {
  if (mouseIsPressed) {
    if (frameCount % 5 === 0) {
      for (let i = 5; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 80);

        // random choice of circle or square
        if (random() < 5.5) {
          circle(x, y, r);
        
        }
      }
    }
  }
}  