let sound, amplitude, cnv;
let radius = 100;


function preload(){
  sound = loadSound('assets/BAR.mp3');
}
function setup() {
  cnv = createCanvas(600,600);
  amplitude = new p5.Amplitude();
  
  // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}
function draw() {
  background(0);
  stroke( random(100, 200), random(200, 220), random(240, 255));
  translate(width/2,height/2,0);

  for (let dTheta = 0; dTheta <= 180; dTheta += 10) {
    let theta = radians(dTheta);
    let z = radius * cos(theta);
    let r = radius * sin(theta);
    drawCircle(z, r);
  }
}

function drawCircle(z,r){
  fill(random() * 255);
  for(let i = 0; i <360; i +=15){
    let phi = radians(i)
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 80);
    let x = r *cos(phi);
    let y = r *sin(phi);
    ellipse(x,y, size, size);
  }  
}
