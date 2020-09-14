
let ht = 0;
let r = 0;
function setup() {
  frameRate(10);

}

function draw() {
  createCanvas(800, 400);
  r = random(-10,10);
  for (ht = 0; ht<400; ht=ht+20)
  {
  	fill(256);
  	rect(0, ht, 800, 10);
  	fill(10);
  	rect(0, ht+10, 800, 10);
  }

  for (wt = 0; wt<800; wt=wt+20)
  {
  	fill(20);
  	rect(wt, 0, 10, 200-r);
  	fill(256);
  	rect(wt+10, 0, 10, 200-r);
  	r = r+random(-10,10);
  }
  

  
}
