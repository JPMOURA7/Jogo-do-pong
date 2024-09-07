//tamanho do circulo
let xbolinha = 400;
let ybolinha = 200;
let diametrodabolinha = 22;

//colisao do circulo
let raio = diametrodabolinha / 2;
//é necessario para dar colisao as bordas do circulo e nao ao seu centro

//Movimentação da bolinha
let velocidadexdabolinha = 2;
let velocidadeydabolinha = 2;
function setup() { 
  createCanvas(800, 400); 
}

function draw() { 
  background(0); 
  circle(xbolinha,ybolinha,diametrodabolinha);
  xbolinha += velocidadexdabolinha;
  ybolinha += velocidadeydabolinha;
  
  if(xbolinha + raio > width || xbolinha - raio< 0){
    velocidadexdabolinha *=-1;
    
  }
  if(ybolinha + raio > height || ybolinha - raio < 0){
    velocidadeydabolinha *=-1;
    
  }
}

  //circle(x,y,d) x=cordenada x,y=cordenada y e d=diametro do circulo 
