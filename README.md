# Jogo-do-pong
Criação do jogo do Pong do Curso do Alura

let xbolinha = 400
let ybolinha = 200
let diametrodabolinha = 22
function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  circle(xbolinha,ybolinha,diametrodabolinha) //circle(x,y,d)  x=cordenada x,y=cordenada y e d=diametro do circulo
} 
//11:52 do video criando a bolinha e cenário
