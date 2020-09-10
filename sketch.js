function setup() {
  
  createCanvas(400, 400);
  
}
var i=0;
function draw() {
  background("pink")
  fill("green")
  textSize(18)
  line(200,0,200,400)
  text("Shreya",100,50)
  rect(10,150,10,100);
  rect(380,mouseY,10,100);
  rect(195,195, 10,10);
  console.log(i);
  
}