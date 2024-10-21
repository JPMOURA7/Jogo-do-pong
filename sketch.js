//Var da bolinha
let xbolinha = 400;
let ybolinha = 200;
let diametrodabolinha = 22;

//colisao do circulo
let raio = diametrodabolinha / 2;
//é necessario para dar colisao as bordas do circulo e nao ao seu centro

//Movimentação da bolinha
let velocidadexdabolinha = 6;
let velocidadeydabolinha = 6;

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

//placar
let meuspontos= 0;
let pontosdooponente= 0;

//sons
let raquetada;
let ponto;
let trilha;

//escolha de jogar solo ou multiplayer
let Solo;
let Multiplayer;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() { 
  createCanvas(800, 400); 
  trilha.loop();
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
  incluirplacar();
  marcarpontos();
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
    if (keyIsDown(87)){
      yraquete -=10;
    }
    if (keyIsDown(83)){
      yraquete +=10;
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
      raquetada.play();
    }
  }
  function colisaoraqueteinimigabiblioteca (){
    
    colidiu = collideRectCircle(xraqueteinimiga, yraqueteinimiga, Comprimentoraquete, Alturaraquete, xbolinha, ybolinha, raio);
    if(colidiu){
      velocidadexdabolinha *= -1
      raquetada.play();
    }
  }
  function movimentaraqueteinimiga (){
    velocidadeyinimiga = ybolinha - yraqueteinimiga - Comprimentoraquete / 2 - 40;
    yraqueteinimiga += velocidadeyinimiga
  }
  function movimentoraqueteinimiga(){
    if(keyIsDown(85)){
      yraqueteinimiga -=10;
    } 
    if(keyIsDown(74)){
      yraqueteinimiga +=10;
    }
  }
  function incluirplacar(){
    textAlign(CENTER);
    textSize(16);
    stroke("white")
    fill("blue");
    rect (350,10,40,20);
    rect (450,10,40,20);
    fill(255);
    text(meuspontos,370,26);
    text(pontosdooponente,470,26);
  }
  function marcarpontos(){
    if (xbolinha + raio > 800){
      meuspontos += 1;
      ponto.play();
    }
    if(xbolinha - raio < 0){
      pontosdooponente +=1;
      ponto.play();
    }
  }
  //rect(x,y,w,h,tl,tr,br,bl)x e y=coordenadas que ele aparece,w e h=largura e altura,
  //circle(x,y,d) x=cordenada x,y=cordenada y e d=diametro do circulo 
