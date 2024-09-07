let xbolinha = 400;
let ybolinha = 200;
let diametrodabolinha = 22;
let velocidadexdabolinha = 6;
let velocidadeydabolinha = 6;
function setup() { 
  createCanvas(800, 400); 
}

function draw() { 
  background(0); 
  circle(xbolinha,ybolinha,diametrodabolinha);
  xbolinha += velocidadexdabolinha;
  ybolinha += velocidadeydabolinha;
  if(xbolinha > width || xbolinha < 0){
    velocidadexdabolinha*=-1;
  }
  if(ybolinha > height || ybolinha < 0){
    velocidadeydabolinha*=-1;
  }
}
