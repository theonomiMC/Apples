class pBall {
  constructor(x, y, r) {
this.x = x;
this.y = y;
this.r = r;

  }
  intersects() {
   let d2 = dist(this.x, this.y, mouseX, 350)
   return(d2 < this.r);
   
  }
 show() {
  image(apple2, this.x, this.y);
  //ellipse(this.x, this.y, r = 20);
  }
 
move() {
    
    let speed = 7;
    this.y = this.y + speed;
    if (this.y + speed > 400) {
    this.y = 0;
    this.x = random(width*0.8) + speed;
    
    }
  }
}