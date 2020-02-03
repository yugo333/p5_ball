

let r=150;


function preload(){
  sound = loadSound('assets/BAR.mp3');
}

function setup(){
  let cnv = createCanvas(700,700);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT(0.5);
  sound.amp(0.1);

  
}

function draw(){
  background(0);
  translate(width/2, height/2, 0);
  let spectrum = fft.analyze();
  noStroke();
  fill(0,255,0); // spectrum is green

  for (var i = 0; i< spectrum.length; i++){
    for (var i = 0; i < 360; i += 10) {
      push();
      let phi = radians(i);
      let x = r * cos(phi);
      let y = r * sin(phi);
      let h = -height + map(spectrum[i], 0, 255, height, 0);
      let w = map(i, 0, spectrum.length, 0, width);
      stroke(255);
      // strokeWeight(4);
      ellipse(x,y,h,w);  
      pop();  
    }
  }


 
 
  // for (var i = 0; i< spectrum.length; i++){
  //   let x = map(i, 0, spectrum.length, 0, width);
  //   let h = -height + map(spectrum[i], 0, 255, height, 0);
  //   ellipse(width/2, height/2,x,h)
  // }

  // let waveform = fft.waveform();
  // noFill();
  // beginShape();
  // stroke(255,0,0); // waveform is red
  // strokeWeight(1);
  // for (var i = 0; i< waveform.length; i++){
  //   let x = map(i, 0, waveform.length, 0, width);
  //   let y = map( waveform[i], -1, 1, 0, height);
  //   vertex(x,y);
  // }
  // endShape();

}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}