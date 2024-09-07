//Var da bolinha
let xbolinha = 400;
let ybolinha = 200;
let diametrodabolinha = 22;

//colisao do circulo
let raio = diametrodabolinha / 2;
//é necessario para dar colisao as bordas do circulo e nao ao seu centro

//Movimentação da bolinha
let velocidadexdabolinha = 2;
let velocidadeydabolinha = 2;

//Var da raquete do player
let xraquete = 20;
let yraquete = 150;
let Comprimentoraquete = 10;
let Alturaraquete = 100;

//Var da raquete inimiga
let xraqueteinimiga = 780;
let yraqueteinimiga = 150;
let velocidadeYinimiga;

let colidiu=false;

function setup() { 
  createCanvas(800, 400); 
}

function draw() { 
  background(0); 
  mostrarbolinha();
  movimentodabolinha();
  verificartoquenasbordas();
  raqueteplayer();
  raqueteinimiga();
  movimentararaquete();
  //verificacolisaocomaraquete();
  //verificacolisaocomaraqueteinimiga();
  colisaoraquetebiblioteca();
  colisaoraqueteinimigabiblioteca();
  //movimentaraqueteinimiga();
  movimentoraqueteinimiga();
}
  function verificartoquenasbordas(){
    if(xbolinha + raio > width || xbolinha - raio< 0){
    velocidadexdabolinha *=-1;
    
  }
  if(ybolinha + raio > height || ybolinha - raio < 0){
    velocidadeydabolinha *=-1;
    
  }
  }
  function mostrarbolinha(){
    circle(xbolinha,ybolinha,diametrodabolinha);
}
  function movimentodabolinha(){                       xbolinha += velocidadexdabolinha;
    ybolinha += velocidadeydabolinha;
  }
  function raqueteplayer(){
    rect(xraquete,yraquete,Comprimentoraquete,Alturaraquete)
}
  function movimentararaquete(){
    if (keyIsDown(UP_ARROW)){
      yraquete -=10
    }
    if (keyIsDown(DOWN_ARROW)){
      yraquete +=10
    }
  }
  function verificacolisaocomaraquete(){
    
    if (xbolinha - raio < xraquete + Comprimentoraquete && ybolinha - raio < yraquete + Alturaraquete && ybolinha + raio > yraquete)
      velocidadexdabolinha *=-1;
      
  }
  function verificacolisaocomaraqueteinimiga(){
    
    if (xbolinha + raio > xraqueteinimiga - Comprimentoraquete && ybolinha + raio < yraqueteinimiga - Alturaraquete && ybolinha - raio > yraqueteinimiga)
      velocidadexdabolinha *=-1;
      
  }
  function raqueteinimiga(){
    rect(xraqueteinimiga,yraqueteinimiga,Comprimentoraquete,Alturaraquete)
}
  function colisaoraquetebiblioteca (){
    
    colidiu = collideRectCircle(xraquete, yraquete, Comprimentoraquete, Alturaraquete, xbolinha, ybolinha, raio);
    if(colidiu){
      velocidadexdabolinha *= -1
    }
  }
  function colisaoraqueteinimigabiblioteca (){
    
    colidiu = collideRectCircle(xraqueteinimiga, yraqueteinimiga, Comprimentoraquete, Alturaraquete, xbolinha, ybolinha, raio);
    if(colidiu){
      velocidadexdabolinha *= -1
    }
  }
  function movimentaraqueteinimiga (){
    velocidadeyinimiga = ybolinha - yraqueteinimiga / 2 - 30;
    yraqueteinimiga += velocidadeyinimiga
  }
  function movimentoraqueteinimiga(){
    if(keyIsDown(87)){
      yraqueteinimiga -=10;
    } 
    if(keyIsDown(83)){
      yraqueteinimiga +=10;
    }
  }
  //rect(x,y,w,h,tl,tr,br,bl)x e y=coordenadas que ele aparece,w e h=largura e altura,
  //circle(x,y,d) x=cordenada x,y=cordenada y e d=diametro do circulo 
