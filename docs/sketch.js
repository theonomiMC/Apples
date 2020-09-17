
//still working on it
let balls = [];
let score = 0;
let bg;
let apple;
let apple2;
var buttonPlay;
var timer = 15;
var pball;
var basket_H = 59;

// load background image
function preload() {
  bg = loadImage('bg2.jpg');//Designed by brgfx / Freepik"
  apple = loadImage('apple40.png');
  apple2 = loadImage('gapple40.png');
  basket = loadImage('basket70.png');
}

function setup() {
  createCanvas(500, 400);
  buttonPlay = createButton('Play');
  buttonPlay.mousePressed(Play);
  noLoop();
  
  for (let i = 0; i < 2; i++) {
    x = random(width*0.9);
    y = random(height);
   balls[i]=new Ball(x, y, r=20); 
   }
   
  pball = new pBall(x, y, r= 20);
  setInterval(timeIt, 1000);
    
}

function Play() {
   score = 0; 
   timer = 15;
   loop(); 
 
}

function draw() {
   
  background(bg);
  for (let i=0; i< balls.length; i++) {
   balls[i].show();
   balls[i].move();
 }
  pball.show();
  pball.move();
  push();
  fill(230, 230, 0);
  stroke(0);
  strokeWeight(3);
  let eater = image(basket, mouseX, height-basket_H);
  pop();
  
  //intersection of green apple;
  if (pball.intersects(eater)) {
    score--;
    console.log('green apple ate')
    }
 //intersection of red apple;
  for (let i = 0; i < balls.length; i++) {
  if (balls[i].intersects(eater)) {
    score++;
    push();
    fill(255);
    textSize(20);
    text('score:' + score, 90, 300);
    pop();

    }
  }
  //time and game status check;
  if (timer >= 15) {
    text("time: " + timer, 10, 80);
  }
  if (timer < 15) {
    text('time: ' + timer, 10, 80);
  }
  if (timer == 0 && score >= 15) {
//--Score text---      
    push();
    textFont('cursive', 40);
    textSize(30);
    textAlign(CENTER);
    text('WINNER', 225, 150);
    text('Score: ' + score, 225, 200);
    pop();
    noLoop()
    // }
    
  }
  if (timer == 0 && score < 15 ) {
//--Score text---    
    push();
    textFont('cursive', 40);
    textSize(30);
    textAlign(CENTER);
    text('GAME OVER', 225, 150);
    text('Score: ' + score, 225, 200);
    pop();
    noLoop();
  }
}
function timeIt() {
  if (timer > 0) {
    timer--;
  }
}

  
class Ball {
  constructor(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  }
  intersects() {
   let d1 = dist(this.x, this.y, mouseX, 350)
   return(d1 < this.r);
   
  }
show() {
  image(apple, this.x, this.y);
  }
 
move() {
    
    let speed = 15;
    this.y = this.y + speed;
    if (this.y + speed > height) {
    this.y = 0;
    this.x = random(width*0.7) + speed;
    
    }
  }
}
