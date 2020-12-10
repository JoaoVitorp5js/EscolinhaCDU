var x = 115, xE1 = 100, yE1 = 100, xE2 = 185, yE2 = 100, xE3 = 275, yE3 = 100; 
var y = 97;
var largura = 150; 
var altura = 35;
var opção = 1;
var tela = 0;
var cont = 0, conti = 0, contato = 0, contCent = 0, contDeze = 0, contUni = 0, contE = 0, contCT = 0, contCE1 = 0, contCE2 = 0, contCE3 = 0, pontos = 0, pontosC = 3, acertos = 0, erros = 0, erro = 0; 
var contS = 0, contSeg = 0, contSB = 0, contis = 0, Ti = 1, Tf = 60;
var num = 0, num1 = 0, num2 = 0, valor = 0, somaC = 0;
var palavras = ["C","D","U"];
var soma = [];
var PontoM = 0, p1 = 0, p2 = 0, p3 = 0, n = 0;
var c = 0, d = 0, u = 0, w = 0, a = 0, z = 0;
var cE1 = 0, cE2 = 0, cE3 = 0, cE4 = 0, cE5 = 0, cE6 = 0, cE7 = 0, cE8 = 0, cE9 = 0, cE10 = 0, cE11 = 0, cE12 = 0, cE13 = 0, cE14 = 0, cE15 = 0;


let img;
function preload() { 
  imgM = loadImage('QuadR.jpg');
  imgacer = loadImage('acer.png');
  imgganhei = loadImage('ganhei.png');
  imgtop = loadImage('top.png');
  imgblz = loadImage('blz.png');
  imgMen = loadImage('pag.jpg');
  imgBv = loadImage('teacherR.jpg');
  imgduv = loadImage('duvida.png');
  imgE = loadImage('gfR.jpg');
  imgI = loadImage('EducationR.jpg');
  imgC = loadImage('CongratolationR.jpg');
  imgP = loadImage('perfilRR.jpg');
  imgD = loadImage('Diploma.jpg');
  imgG = loadImage('t1.jpg');
  imgt2 = loadImage("t2.jpg");
  imgt3 = loadImage('t3.jpg');
  imgt4 = loadImage('t4.jpg');
  imgt5 = loadImage('t5.jpg');
  imgt6 = loadImage('t6.jpg');
  imgt7 = loadImage('t7.jpg');
  imgO = loadImage('GameOver.png');
}

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() { 
  background(220);
  
  if(tela==0){
      menu(); 
  }if(tela==1){
    OpPularTuto(); 
  }if(tela==2){
     InformaçõesGame();
  }if(tela==3){ 
     CreditosGame();
  }if(tela==4){
     CompDec();
   }if(tela==5){
     fasesC();
  }if(tela==6){
     fasesD();
  }if(tela == 7){
      Expli1(); 
  }if(tela == 8){
      Expli2(); 
  }if(tela == 9){
      Expli3(); 
  }if(tela == 10){
      Expli4(); 
  }if(tela == 11){
      Expli5(); 
  }if(tela == 12){
      Expli6(); 
  }if(tela == 13){
      Aula();
  }if(tela == 14){
      Game_Over();
  }if(tela == 15){
      Diploma();
  }if(tela == 16){
      TutorialC();
  }if(tela == 17){
      OpJogarOuTutoC();
  }if(tela == 18){
      TelaB();
  }if(tela == 19){
      TutorialD();
  }if(tela == 20){
      OpJogarOuTutoD(); 
  }if(tela == 21){ 
      TelaImforDec();
  }if(tela == 22){
      Boas_Vidas(); 
  }if(tela == 23){
      Duvida();
  }if(tela == 24){
      acertoBlz();
  }if(tela == 25){
      acertosTop();
  }if(tela == 26){
      acertoGanhei();
  }if(tela == 27){
      acertoAcer();
  }
}

function menu(){
  image(imgMen, 0, 0);
  
  if(mouseX > x && mouseX < x+largura && mouseY > y && mouseY < y+altura){
  fill(10, 200);
    if(mouseIsPressed){
       tela = 1;
    }   
  }else{
    fill(255, 0, 0);   
  }
  stroke(0);
  rect(x, y, largura, altura, 20);
  if(mouseX > 115 && mouseX < 130+largura && mouseY > 195 && mouseY < 195+altura){ 
  fill(10, 200);
    if(mouseIsPressed){
       tela = opção + 1;
    }   
  }else{
    fill(0, 0, 255);
  }  
  stroke(0); 
  rect(115, 195, largura, altura, 20);
   if(mouseX > 115 && mouseX < 130+largura && mouseY > 300 && mouseY < 300+altura){
  fill(10, 200);
    if(mouseIsPressed){
       tela = opção + 2;
    }   
  }else{
    fill(0, 255, 0);
  }  
  stroke(0); 
  rect(120, 295, largura, altura, 20);
  
  fill(255, 100);
  textSize(50); 
  textAlign(20, 20);
  textStyle(BOLD);
  text("Escolinha ", 20, 65);
  fill(255, 0, 0);
  text("C", 270, 65);
  fill(0, 0, 255);
  text("D", 305, 65);
  fill(0, 255, 0);
  text("U", 340, 65);
  textSize(20);
  fill(255);
  text("Jogar", 155, 120);
  text("Informações", 130, 220);
  text("Créditos", 150, 320); 
}

function OpPularTuto(){
  image(imgE, 0, 0);
  
if(mouseX > 60 && mouseX < 200 && mouseY > 50 && mouseY < 100){
    fill(255, 0, 0);
    if(mouseIsPressed){
       tela = 4;
    }
  }else{
    fill(255);
  }
  stroke(0);
  rect(50, 50, 150, 50, 20); 
  if(mouseX > 50 && mouseX < 210 && mouseY > 140 && mouseY < 190){
    fill(0, 255, 0);
    if(mouseIsPressed){
       tela = 22;
    }
  }else{
    fill(255);
  }
  stroke(0);
  rect(50, 140, 160, 50, 20); 
  
  noStroke();
  textSize(20);
  fill(0);
  textStyle(BOLD);
  text("Ir para o Jogo", 60, 80);
  text("Ir para a Aula", 60, 170);
  noFill(); 
  textSize(15);
  fill(255);
  textStyle(BOLD);
  text("Pressione Esc para voltar", 10, 390);
} 

function Boas_Vidas(){
  image(imgBv, 0, 0);
  
  fill(255);
  textSize(45); 
  textAlign(20, 20);
  textStyle(BOLD);
  text("Bem-Vindo ", 25, 110);
  text("à", 125, 145);
  text("Escolinha ", 25, 185);
  textSize(50);
  fill(255, 0, 0);
  text("C", 45, 265);
  fill(0, 0, 255);
  text("D", 115, 265);
  fill(0, 255, 0);
  text("U", 185, 265);
  
  Tf = 1;
  cont = cont + 1;
  contS = Tf - (cont/5);
  
 if(contS <= 0){ 
  if(mouseX > 145 && mouseX < 225 && mouseY > 365 && mouseY < 395){
    fill(255);   
    if(mouseIsPressed){
       tela = 1; 
       cont = 0;
    }
  }else{
    fill(255, 100);
  } 
    stroke(0);
    rect(145, 365, 80, 30, 20);
  if(mouseX > 145 && mouseX < 225 && mouseY > 330 && mouseY < 360){
    fill(240,248,255);
    if(mouseIsPressed){
       tela = 13;
       cont = 0;
    }
  }else{
    fill(255, 100);
  }
  stroke(0);
  rect(145, 330, 80, 30, 20);
  
  noStroke();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar", 165, 385); 
  noFill(); 
  fill(0);
  textStyle(BOLD);
  text("Continuar", 150, 350); 
  noFill(); 
 }    
}

function Aula(){
  image(imgG, 0, 0);
  
  Tf = 1;
  cont = cont + 1;
  contS = Tf - (cont/5);
  
 if(contS <= 0){ 
  if(mouseX > 145 && mouseX < 225 && mouseY > 365 && mouseY < 395){
    fill(240,248,255);   
    if(mouseIsPressed){
       tela = 1; 
       cont = 0;
    }
  }else{
    fill(255, 100);
  } 
    stroke(0);
    rect(145, 365, 80, 30, 20);
  if(mouseX > 145 && mouseX < 225 && mouseY > 330 && mouseY < 360){
    fill(240,248,255);
    if(mouseIsPressed){
       tela = 7;
       cont = 0;
    }
  }else{
    fill(255, 100);
  }
  stroke(0);
  rect(145, 330, 80, 30, 20);
   
  noStroke(); 
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar", 165, 385); 
  noFill(); 
  fill(0);
  textStyle(BOLD);
  text("Continuar", 150, 350); 
  noFill();
 }   
} 

function Expli1(){
  image(imgt2, 0, 0);
  Tf = 1;
  cont = cont + 1;
  contS = Tf - (cont/5);
  
 if(contS <= 0){
  if(mouseX > 145 && mouseX < 225 && mouseY > 365 && mouseY < 395){
    fill(240,248,255);   
    if(mouseIsPressed){
       tela = 13;
       cont = 0;
    }
  }else{
    fill(255, 100);
  } 
    stroke(0);
    rect(145, 365, 80, 30, 20);
  if(mouseX > 145 && mouseX < 225 && mouseY > 330 && mouseY < 360){
    fill(240,248,255);
    if(mouseIsPressed){
       tela = 8;
       cont = 0;
    }
  }else{
    fill(255, 100);
  }
  stroke(0);
  rect(145, 330, 80, 30, 20);
  
  noStroke();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar", 165, 385); 
  noFill(); 
  fill(0);
  textStyle(BOLD);
  text("Continuar", 150, 350); 
  noFill(); 
    
  }
} 
 
function Expli2(){
  image(imgt3, 0, 0);
    
  Tf = 1;
  cont = cont + 1;
  contS = Tf - (cont/5);
  
 if(contS <= 0){ 
  if(mouseX > 145 && mouseX < 225 && mouseY > 365 && mouseY < 395){
    fill(240,248,255);   
    if(mouseIsPressed){
       tela = 7; 
       cont = 0;
    }
  }else{
    fill(255, 100);
  } 
    stroke(0);
    rect(145, 365, 80, 30, 20);
  if(mouseX > 145 && mouseX < 225 && mouseY > 330 && mouseY < 360){
    fill(240,248,255);
    if(mouseIsPressed){
       tela = 9;
       cont = 0;
    }
  }else{
    fill(255, 100);
  }
  stroke(0);
  rect(145, 330, 80, 30, 20);
  
  noStroke(); 
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar", 165, 385); 
  noFill(); 
  fill(0);
  textStyle(BOLD);
  text("Continuar", 150, 350); 
  noFill(); 
 } 
} 

function Expli3(){
  image(imgt4, 0, 0);
  
  Tf = 1;
  cont = cont + 1;
  contS = Tf - (cont/5);
  
 if(contS <= 0){ 
  if(mouseX > 145 && mouseX < 225 && mouseY > 365 && mouseY < 395){
    fill(240,248,255);   
    if(mouseIsPressed){
       tela = 8; 
       cont = 0;
    }
  }else{
    fill(255, 100);
  } 
    stroke(0);
    rect(145, 365, 80, 30, 20);
  if(mouseX > 145 && mouseX < 225 && mouseY > 330 && mouseY < 360){
    fill(240,248,255);
    if(mouseIsPressed){
       tela = 10;
       cont = 0;
    }
  }else{
    fill(255, 100);
  }
  stroke(0);
  rect(145, 330, 80, 30, 20);
   
  noStroke(); 
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar", 165, 385); 
  noFill(); 
  fill(0);
  textStyle(BOLD);
  text("Continuar", 150, 350); 
  noFill();
 } 
} 

function Expli4(){
  image(imgt5, 0, 0);
   
  Tf = 1;
  cont = cont + 1;
  contS = Tf - (cont/5);
  
 if(contS <= 0){ 
  if(mouseX > 145 && mouseX < 225 && mouseY > 365 && mouseY < 395){
    fill(240,248,255);   
    if(mouseIsPressed){
       tela = 9; 
       cont = 0;
    }
  }else{
    fill(255, 100);
  } 
    stroke(0);
    rect(145, 365, 80, 30, 20);
  if(mouseX > 145 && mouseX < 225 && mouseY > 330 && mouseY < 360){
    fill(240,248,255);
    if(mouseIsPressed){
       tela = 11;
       cont = 0;
    }
  }else{
    fill(255, 100);
  }
  stroke(0);
  rect(145, 330, 80, 30, 20);
   
  noStroke(); 
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar", 165, 385); 
  noFill();
  fill(0);
  textStyle(BOLD);
  text("Continuar", 150, 350); 
  noFill(); 
 } 
} 

function Expli5(){
  image(imgt6, 0, 0);
   
  Tf = 1;
  cont = cont + 1;
  contS = Tf - (cont/5);
  
 if(contS <= 0){ 
  if(mouseX > 145 && mouseX < 225 && mouseY > 365 && mouseY < 395){
    fill(240,248,255);   
    if(mouseIsPressed){
       tela = 10; 
       cont = 0;
    }
  }else{
    fill(255, 100);
  } 
    stroke(0);
    rect(145, 365, 80, 30, 20);
  if(mouseX > 145 && mouseX < 225 && mouseY > 330 && mouseY < 360){
    fill(240,248,255);
    if(mouseIsPressed){
       tela = 12;
       cont = 0;
    }
  }else{
    fill(255, 100);
  }
  stroke(0);
  rect(145, 330, 80, 30, 20);
   
  noStroke(); 
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar", 165, 385); 
  noFill(); 
  fill(0);
  textStyle(BOLD);
  text("Continuar", 150, 350); 
  noFill(); 
 } 
} 

function Expli6(){
  image(imgt7, 0, 0);
   
  Tf = 1;
  cont = cont + 1;
  contS = Tf - (cont/5);
  
 if(contS <= 0){ 
  if(mouseX > 145 && mouseX < 225 && mouseY > 365 && mouseY < 395){
    fill(240,248,255);   
    if(mouseIsPressed){
       tela = 11; 
       cont = 0;
    }
  }else{
    fill(255, 100);
  } 
    stroke(0);
    rect(145, 365, 80, 30, 20);
  if(mouseX > 145 && mouseX < 225 && mouseY > 330 && mouseY < 360){
    fill(240,248,255);
    if(mouseIsPressed){
       tela = 23;
       cont = 0;
    }
  }else{
    fill(255, 100);
  }
  stroke(0);
  rect(145, 330, 80, 30, 20);
  
  noStroke();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar", 165, 385); 
  noFill();
  fill(0);
  textStyle(BOLD);
  text("Continuar", 150, 350); 
  noFill();
 } 
} 

function Duvida(){
   image(imgduv, 0, 0);
  
  if(mouseX > 45 && mouseX < 125 && mouseY > 365 && mouseY < 395){
    fill(255, 0, 0);   
    if(mouseIsPressed){
       tela = 4; 
       cont = 0;
    }
  }else{
    fill(0, 255, 0);
  }
    stroke(0);
    rect(45, 365, 80, 30, 20);
  
  noStroke();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Jogar", 65, 385);
}

function CompDec(){
  image(imgM, 0, 0);
   
  textSize(25);
  fill(255);
  textStyle(BOLD);
  text("Escolha a opção de Jogo", 45, 100);
  textSize(25);
  text("COMPOR", 50, 185);
  text("DECOMPOR", 205, 185);
  noFill(); 
  textSize(15);
  fill(255);
  textStyle(BOLD);
  text("Pressione Esc para voltar", 195, 365);
  
if(mouseX > 40 && mouseX < 175 && mouseY > 150 && mouseY < 200){
    fill(255,150);
    if(mouseIsPressed){
       tela = 17;
    }
  }else{
    fill(255, 100);
  }
  noStroke();
  rect(40, 150, 135, 50, 20);
  if(mouseX > 200 && mouseX < 360 && mouseY > 150 && mouseY < 200){
    fill(255,150);
    if(mouseIsPressed){
       tela = 20;
       Tf = 60;
       cont = 0;
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
    }
  }else{
    fill(255, 100);
  }
  noStroke();
  rect(200, 150, 160, 50, 20); 
} 

function OpJogarOuTutoC(){
  image(imgM, 0, 0);
  
  fill(255);
  textSize(35); 
  textAlign(20, 20);
  textStyle(BOLD);
  text("Escolinha ", 60, 100);
  fill(255, 0, 0);
  text("C", 235, 100);
  fill(0, 0, 255);
  text("D", 265, 100);
  fill(0, 255, 0);
  text("U", 295, 100);
  textSize(25);
  fill(255);
  textStyle(BOLD);
  textSize(25);
  text("Jogar", 155, 185);
  text("Tutorial", 145, 300);
  noFill(); 
  textSize(15);
  fill(255);
  textStyle(BOLD);
  text("Pressione Esc para voltar", 195, 365);
  
if(mouseX > 145 && mouseX < 225 && mouseY > 150 && mouseY < 200){
    fill(255,150);
    if(mouseIsPressed){
       tela = 5;
       cont = 0;
       Tf = 60;
       valor = 0;
       somaC = 0;
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
       contCT = 0;
       contCE1 = 0; 
       contCE2 = 0;
       contCE3 = 0;
       numAleatorios();
       letraAleatorias();
      xE1 = 100;
      yE1 = 100;
      xE2 = 185;
      yE2 = 100;
      xE3 = 275;
      yE3 = 100;
    }
  }else{
    fill(255, 100);
  }
  noStroke();
  rect(150, 150, 80, 50, 20);
  if(mouseX > 135 && mouseX < 240 && mouseY > 270 && mouseY < 310){
    fill(255,150);
    if(mouseIsPressed){
       tela = 16;
       cont = 0;
       valor = 0;
       somaC = 0;
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
       contCT = 0;
       contCE1 = 0; 
       contCE2 = 0;
       contCE3 = 0;
       numAleatorios();
       letraAleatorias();
      xE1 = 100;
      yE1 = 100;
      xE2 = 185;
      yE2 = 100;
      xE3 = 275;
      yE3 = 100;   
    }
  }else{
    fill(255, 100);
  }
  noStroke();
  rect(135, 270, 115, 40, 20); 
}

function TutorialC(){
  image(imgM, 0, 0);
  
  c = 8, d = 1,  u = 2; 
  p1 = "C", p2 = "D", p3 = "U";
  
  Tf = 0;
  cont = cont + 1;
  contS = Tf + (int(cont/30));
  
  
   
  if(contS < 5){
     textSize(15);
     fill(255);
     text("Nesse jogo, ele te dará 3 Letras e 3 algarismo", 35, 210);
  }if(contS >= 5){
    textSize(30);
    textStyle(BOLD);
    if(p1 == "C"){
        fill(255, 0, 0);
        text(p1, 125, 110);
    }if(p2 == "D"){
         fill(0, 0, 255);
         text(p2, 210, 110);
    }if(p3 == "U"){
         fill(0, 255, 0);
         text(p3, 300, 110);
    }
        fill(255);
        text(c+"                   "+u, 90, 110);
        text(d, 175, 110);
  }if(contS >= 7 && contS <= 8){
      noFill();
      stroke(255, 0, 0);
      rect(85, 80, 70, 40);  
      noStroke();
      textSize(40);
      fill(255, 0, 0);
      text(p1, 180, 200);
      textSize(30);
      text(p1, 190, 271);
      fill(255);
      text("entena(s) ", 214, 270);
      fill(255, 255, 0);
      text("Significa: ", 50, 270);
  }if(contS > 8 && contS <= 10){
     noFill();
     stroke(0, 0, 255);
     rect(170, 80, 70, 40);
     noStroke();
     textSize(40);
     fill(0, 0, 255);
     text(p2, 180, 200);
     textSize(30);
     text(p2, 190, 271);
     fill(255);
     text("ezena(s) ", 214, 270);
     fill(255, 255, 0);
     text("Significa: ", 50, 270);
  }if(contS > 10 && contS <= 12){
     noFill();
     stroke(0, 255, 0);
     rect(260, 80, 70, 40);
     noStroke();
     textSize(40);
     fill(0, 255, 0);
     text(p3, 180, 200);
     textSize(30);
     text(p3, 190, 271);
     fill(255);
     text("nidade(s)", 214, 270);
     fill(255, 255, 0);
     text("Significa: ", 50, 270);
  }
  if(contS > 13 && contS <= 19){
     textSize(14);
     fill(255);
     text("Seu objetivo é colocar os números que precedem as\nletras na ordem correta dentro de cada retângulo.", 25, 210);
  }
  if(contS > 19){ 
     fill(255, 100);
     noStroke();
     rect(55, 160, 70, 40,10);  
     rect(160, 160, 70, 40, 10);
     rect(265, 160, 70, 40, 10);
     noFill();
     ellipse(90, 185, 50, 50);
     ellipse(195, 185, 50, 50);
     ellipse(300, 185, 50, 50);
     textSize(20);
     textStyle(BOLD);
     fill(255);
     text("Centena", 50, 150);
     text("Dezena", 160, 150); 
     text("Unidade", 260, 150);
  } 
  if(contS > 21 && contS <= 27){
     textSize(14);
     fill(255);
     text("Para isso voçê terá que: clicar e arrastar os círculos\nque estão em cima de cada número.", 25, 235);
  }
if(contS > 27 && contS <= 30){
  if(contS > 27){
    fill(255, 100);
    noStroke();
    ellipse(xE1, yE1, 40, 40);
  }if(contS > 28){
    fill(255, 100);
    noStroke();
    ellipse(xE2, yE2, 40, 40);
  }if(contS > 29){
    fill(255, 100);
    noStroke();
    ellipse(xE3, yE3, 40, 40);
  }
}if(contS > 30){
    if(dist(90, 185, xE1, yE1) < (20+25)){
       noFill();  
       ellipse(xE1, yE1, 40, 40); 
       textSize(30);
      if(p1 == "C"){ 
        fill(255, 0, 0);
        text(c+"00", 65, 190);
      }
       w = c * 100; 
       contCE1 = 1;
   }else{
    if(dist(185, 185, xE1, yE1) < (20+25)){ 
        noFill();  
        ellipse(xE1, yE1, 40, 40); 
        textSize(30);
      if(p1 == "C"){ 
       fill(255, 0, 0);
       text(c+"0", 180, 190);
      }
        w = c * 10;
        contCE1 = 1;
      }else{
       fill(255, 100);
       noStroke();
       ellipse(xE1, yE1, 40, 40);
       w = 0;
       contCE1 = 0;
     }
}   
  if(dist(90, 185, xE2, yE2) < (20+25)){
    noFill();  
    ellipse(xE2, yE2, 40, 40); 
    textSize(30);
    if(p2 == "D"){ 
       fill(0, 0, 255);
       text(d+"00", 65, 190);
    }
    z = d * 100;
    contCE2 = 1;
  }else{
    if(dist(185, 185, xE2, yE2) < (20+25)){
       noFill();  
       ellipse(xE2, yE2, 40, 40); 
       textSize(30);
      if(p2 == "D"){
        fill(0, 0, 255);
        text(d+"0", 180, 190);
      }
        z = d * 10;
        contCE2 = 1;
   }else{
    fill(255, 100);
    noStroke();
    ellipse(xE2, yE2, 40, 40);
    z = 0;
    contCE2 = 0;
  }
}
  if(dist(300, 185, xE3, yE3) < (20+25)){ 
        noFill();  
        ellipse(xE3, yE3, 40, 40); 
        textSize(30);
      if(p3 == "U"){
        fill(0, 255, 0);
        text(u, 290, 190);
      }
        a = u;
        contCE3 = 1;
  }else{
    fill(255, 100);
    noStroke();
    ellipse(xE3, yE3, 40, 40);
    a = 0;
    contCE3 = 0;
  }
  
  valor = w + z + a;
  contT = contCE1 + contCE2 + contCE3;
  
 if(contS > 30 && contS <= 35){
     textSize(14);
     fill(255);
     text("Esse retângulo maior, motra a soma desse número.", 30, 235);
  }  
  if(contT == 3){
    if(valor == 812){
     valor = 0;
     contCT = 0;
     contCE1 = 0; 
     contCE2 = 0;
     contCE3 = 0;
     pontos = acertos + 1;
     acertos = pontos;
     numAleatorios();
     letraAleatorias(); 
      xE1 = 100;
      yE1 = 100;
      xE2 = 185;
      yE2 = 100;
      xE3 = 275;
      yE3 = 100;
  }else{
    if(valor != 812){
      valor = 0;
      contCT = 0;
      contCE1 = 0; 
      contCE2 = 0;
      contCE3 = 0;
      erros = erro + 1;
      erro = erros;
      numAleatorios();
      letraAleatorias(); 
      xE1 = 100;
      yE1 = 100;
      xE2 = 185;
      yE2 = 100;
      xE3 = 275;
      yE3 = 100;
    }
  }
} 
 if(contS > 30){ 
   fill(255, 100);
   noStroke();
   rect(150, 260, 100, 45, 10);
  if(contCE1 != 0 || contCE2 != 0 || contCE3 != 0){
     textSize(30);
     fill(255); 
     text(valor, 170, 295);
  }
 } 
 if(contS > 35){ 
  textSize(40);
  textStyle(BOLD);
  fill(255);
  text("+", 130, 190);
  text("+", 235, 190);
  text("=", 185, 250);
 }if(contS > 37 && contS <= 42){
     textSize(14);
     fill(255);
     text("Se a posição tiver correta,voçê pontua.", 112, 325);
     text("Caso contrário, erra", 170, 338);
 } 
    
  if(contS > 44 && contS <= 46){
    fill(255, 100);
    noStroke();
    rect(145, 33, 115, 20, 10);
  }
  if(contS > 48 && contS <= 50){
    fill(255, 100);
    noStroke();
    rect(265, 33, 115, 20, 10);
  }
  
 if(pontos == 1 && erros == 1){
    textSize(17);
    fill(255); 
    text("Tempo: X", 25, 50);
    textSize(15);
    fill(255);
    text("Voçê terá um tempo X para cumprir a\n            quantidade de pontos exigida.", 112, 325);
 } 
 if(contS > 42){
     textSize(17);
     fill(255); 
     text("Pontos: "+pontos, 150, 50);
     text(" / "+pontosC, 230, 50);
 }if(contS > 47){
     text("Erros: "+erros, 280, 50);
     text("/ 3", 350, 50);
 }
  if(contS > 50 && contS <= 55){
     textSize(20);
     fill(255);
     text("Arraste os Círculos!", 112, 325);
  } 
  if(contS > 65){
    
  if(mouseX > 285 && mouseX < 345 && mouseY > 260 && mouseY < 300){
    fill(10, 100);   
    if(mouseIsPressed){
       tela = 18; 
    }
  }else{
    fill(0, 255, 0);
  } 
    stroke(0);
    rect(285, 260, 60, 40, 20);
    
    noStroke();
    textSize(25);
    fill(255);
    textStyle(BOLD);
    text("OK!", 290, 290); 
    noFill(); 
  }
}

if(mouseIsPressed && dist(xE1, yE1, mouseX, mouseY) < 20){
     xE1 = mouseX;
     yE1 = mouseY; 
    fill(255);
    ellipse(xE1, yE1, 40, 40);
}if(mouseIsPressed && dist(xE2, yE2, mouseX, mouseY) < 20){
     xE2 = mouseX;
     yE2 = mouseY;
    fill(255);
    ellipse(xE2, yE2, 40, 40);
}if(mouseIsPressed && dist(xE3, yE3, mouseX, mouseY) < 20){
     xE3 = mouseX;
     yE3 = mouseY;
    fill(255);
    ellipse(xE3, yE3, 40, 40);
  }
}

function TelaB(){
  image(imgM, 0, 0); 
  
  fill(255);
  textSize(35); 
  textAlign(20, 20);
  textStyle(BOLD);
  text("Escolinha ", 60, 100);
  fill(255, 0, 0);
  text("C", 235, 100);
  fill(0, 0, 255);
  text("D", 265, 100);
  fill(0, 255, 0);
  text("U", 295, 100);
  textSize(15);
  fill(255);
  text("Se voçê errar 3 vezes, vc perde!", 30, 150);
  text("Se o tempo acabar e voçê não atingir os pontos\nexigidos, voçê perde!", 30, 180);
  textSize(13);
  text("Sem mais delongas, vamos para nossa dirversão!!!", 30, 230);
  
  textSize(25);
  fill(255);
  textStyle(BOLD);
  text("Jogar", 50, 300); 
  noFill();
  if(mouseX > 45 && mouseX < 130 && mouseY > 273 && mouseY < 313){
    fill(10, 100);   
    if(mouseIsPressed){
       tela = 5; 
       cont = 0;
       Tf = 60;
       valor = 0;
       somaC = 0;
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
       contCT = 0;
       contCE1 = 0; 
       contCE2 = 0;
       contCE3 = 0;
       numAleatorios();
       letraAleatorias();
      xE1 = 100;
      yE1 = 100;
      xE2 = 185;
      yE2 = 100;
      xE3 = 275;
      yE3 = 100;
    }
  }else{
    fill(255, 100);
  } 
    noStroke();
    rect(45, 273, 85, 40, 20);
}

function fasesC(){
  image(imgM, 0, 0);
  
  cont = cont + 1;
  contS = Tf - (int(cont/30));
  fill(255);
  textSize(20);
  text(contS, 100, 50);
  textSize(20);
  text("Tempo: ", 25, 50);
  
   if(contS == 0){
     tela = 14;
     cont = 0;
     valor = 0;
     somaC = 0;
     pontos = 0;
     pontosC = 3;
     acertos = 0;
     erros = 0;
     erro = 0;
     contCT = 0;
     contCE1 = 0; 
     contCE2 = 0;
     contCE3 = 0;
     numAleatorios();
     letraAleatorias();
      xE1 = 100;
      yE1 = 100;
      xE2 = 185;
      yE2 = 100;
      xE3 = 275;
      yE3 = 100;
  }
   if(c == 0 && d == 0 && u == 0){
    numAleatorios();
  }
   if(p1 == 0 && p2 == 0 && p3 == 0){
    letraAleatorias();
  }

  textSize(15);
  fill(255);
  textStyle(BOLD);
  text("Voltar ao Menu", 265, 365); 
  noFill(); 
  if(mouseX > 250 && mouseX < 380 && mouseY > 345 && mouseY < 375){
    fill(255, 100); 
    if(mouseIsPressed){
       tela = 0;
       cont = 0;
       valor = 0;
       somaC = 0;
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
       contCT = 0;
       contCE1 = 0; 
       contCE2 = 0;
       contCE3 = 0;
       numAleatorios();
       letraAleatorias();
    }
  }else{
    noFill();
  }
  noStroke();
  rect(250, 345, 130, 30,20);
  textSize(30);
  textStyle(BOLD);
  if(p1 == "C"){
     fill(255, 0, 0);
     text(p1, 125, 110);
  }if(p1 == "D"){
     fill(0, 0, 255);
     text(p1, 125, 110);
  }if(p1 == "U"){
     fill(0, 255, 0);
     text(p1, 125, 110);
  }if(p2 == "C"){
     fill(255, 0, 0);
     text(p2, 210, 110);
  }if(p2 == "D"){
     fill(0, 0, 255);
     text(p2, 210, 110);
  }if(p2 == "U"){
     fill(0, 255, 0);
     text(p2, 210, 110);
  }if(p3 == "C"){
     fill(255, 0, 0);
     text(p3, 300, 110);
  }if(p3 == "D"){
     fill(0, 0, 255);
     text(p3, 300, 110);
  }if(p3 == "U"){
     fill(0, 255, 0);
     text(p3, 300, 110);
  }
  fill(255);
  text(c+"                   "+u, 90, 110);
  text(d, 175, 110);
  
  
  fill(255, 100);
  noStroke();
  rect(55, 160, 70, 40,10);  
  rect(160, 160, 70, 40, 10);
  rect(150, 260, 100, 45, 10);
  rect(265, 160, 70, 40, 10);
  noFill(); 
  ellipse(90, 185, 50, 50);
  ellipse(195, 185, 50, 50);
  ellipse(300, 185, 50, 50);
  textSize(40);
  textStyle(BOLD);
  fill(255);
  text("+", 130, 190);
  text("+", 235, 190);
  text("=", 185, 250);
  textSize(20);
  textStyle(BOLD);
  fill(255);
  text("Centena", 50, 150);
  text("Dezena", 160, 150); 
  text("Unidade", 260, 150);  
  
  if(dist(90, 185, xE1, yE1) < (20+25)){
       noFill();  
       ellipse(xE1, yE1, 40, 40); 
       textSize(30);
      if(p1 == "C"){ 
       fill(255, 0, 0);
       text(c+"00", 65, 190);
      }if(p1 == "D"){
        fill(0, 0, 255);
        text(c+"00", 65, 190);
      }if(p1 == "U"){
        fill(0, 255, 0);
        text(c+"00", 65, 190);
      }
       w = c * 100; 
       contCE1 = 1;
  }else{
     if(dist(185, 185, xE1, yE1) < (20+25)){ 
        noFill();  
        ellipse(xE1, yE1, 40, 40); 
        textSize(30);
      if(p1 == "C"){ 
       fill(255, 0, 0);
       text(c+"0", 180, 190);
      }if(p1 == "D"){
        fill(0, 0, 255);
        text(c+"0", 180, 190);
      }if(p1 == "U"){
        fill(0, 255, 0);
        text(c+"0", 180, 190);
      }
        w = c * 10;
        contCE1 = 1;
  }else{
    if(dist(300, 185, xE1, yE1) < (20+25)){ 
        noFill();  
        ellipse(xE1, yE1, 40, 40); 
        textSize(30);
      if(p1 == "C"){ 
       fill(255, 0, 0);
       text(c, 290, 190);
      }if(p1 == "D"){
        fill(0, 0, 255);
        text(c, 290, 190);
      }if(p1 == "U"){
        fill(0, 255, 0);
        text(c, 290, 190);
      }
        w = c; 
        contCE1 = 1;
  }else{
    fill(255, 100);
    noStroke();
    ellipse(xE1, yE1, 40, 40);
    w = 0; 
    contCE1 = 0;
  }
 } 
}
  
  if(dist(90, 185, xE2, yE2) < (20+25)){
    noFill();  
    ellipse(xE2, yE2, 40, 40); 
    textSize(30);
    if(p2 == "C"){ 
       fill(255, 0, 0);
       text(d+"00", 65, 190);
    }if(p2 == "D"){
        fill(0, 0, 255);
        text(d+"00", 65, 190);
    }if(p2 == "U"){
        fill(0, 255, 0);
        text(d+"00", 65, 190);
    }
    z = d * 100;
    contCE2 = 1;
  }else{
    if(dist(185, 185, xE2, yE2) < (20+25)){ 
        noFill();  
        ellipse(xE2, yE2, 40, 40); 
        textSize(30);
      if(p2 == "C"){ 
       fill(255, 0, 0);
       text(d+"0", 180, 190);
      }if(p2 == "D"){
        fill(0, 0, 255);
        text(d+"0", 180, 190);
      }if(p2 == "U"){
        fill(0, 255, 0);
        text(d+"0", 180, 190);
      }
        z = d * 10;
        contCE2 = 1;
  }else{
    if(dist(300, 185, xE2, yE2) < (20+25)){ 
        noFill();  
        ellipse(xE2, yE2, 40, 40); 
        textSize(30);
      if(p2 == "C"){ 
       fill(255, 0, 0);
       text(d, 290, 190);
      }if(p2 == "D"){
        fill(0, 0, 255);
        text(d, 290, 190);
      }if(p2 == "U"){
        fill(0, 255, 0);
        text(d, 290, 190);
      }
        z = d;
        contCE2 = 1;
  }else{
    fill(255, 100);
    noStroke();
    ellipse(xE2, yE2, 40, 40);
    z = 0;
    contCE2 = 0;
  }
 } 
}
  
  if(dist(90, 185, xE3, yE3) < (20+25)){
    noFill();  
    ellipse(xE3, yE3, 40, 40); 
    textSize(30);
    if(p3 == "C"){ 
       fill(255, 0, 0);
       text(u+"00", 65, 190);
    }if(p3 == "D"){
        fill(0, 0, 255);
        text(u+"00", 65, 190);
    }if(p3 == "U"){
        fill(0, 255, 0);
        text(u+"00", 65, 190);
    }
    a = u * 100;
    contCE3 = 1;
  }else{
    if(dist(185, 185, xE3, yE3) < (20+25)){ 
        noFill();  
        ellipse(xE3, yE3, 40, 40); 
        textSize(30);
      if(p3 == "C"){ 
       fill(255, 0, 0);
       text(u+"0", 180, 190);
      }if(p3 == "D"){
        fill(0, 0, 255);
        text(u+"0", 180, 190);
      }if(p3 == "U"){
        fill(0, 255, 0);
        text(u+"0", 180, 190);
      }
        a = u * 10;
        contCE3 = 1;
  }else{
    if(dist(300, 185, xE3, yE3) < (20+25)){ 
        noFill();  
        ellipse(xE3, yE3, 40, 40); 
        textSize(30);
      if(p3 == "C"){ 
       fill(255, 0, 0);
       text(u, 290, 190);
      }if(p3 == "D"){
        fill(0, 0, 255);
        text(u, 290, 190);
      }if(p3 == "U"){
        fill(0, 255, 0);
        text(u, 290, 190);
      }
        a = u;
        contCE3 = 1;
  }else{
    fill(255, 100);
    noStroke();
    ellipse(xE3, yE3, 40, 40);
    a = 0; 
    contCE3 = 0;
  }
 } 
} 
 
  valor = w + a + z;
  contCT = contCE1 + contCE2 + contCE3;
  
 if(contCT == 3){
    contCT = 0;
    contCE1 = 0; 
    contCE2 = 0;
    contCE3 = 0;
    if(valor == somaC){
     contCT = 0;
     contCE1 = 0; 
     contCE2 = 0;
     contCE3 = 0;
     pontos = acertos + 1;
     acertos = pontos;
     numAleatorios();
     letraAleatorias(); 
      xE1 = 100;
      yE1 = 100;
      xE2 = 185;
      yE2 = 100;
      xE3 = 275;
      yE3 = 100;
  }else{
    if(valor != somaC){
      erros = erro + 1;
      erro = erros;
      numAleatorios();
      letraAleatorias(); 
      xE1 = 100;
      yE1 = 100;
      xE2 = 185;
      yE2 = 100;
      xE3 = 275;
      yE3 = 100;
    }
  }
}   
  if(pontos == pontosC && pontosC == 3){
     pontos = 0; 
     acertos = 0;
     pontosC = pontosC +1;
     tela = 24;
     erros = 0;
     erro = 0;
     cont = 0;
  }
  if(pontos == pontosC && pontosC == 4){
     pontos = 0; 
     acertos = 0;
     pontosC = pontosC +1;
     tela = 25;
     erros = 0;
     erro = 0;
     cont = 0;
  }
  if(pontos == pontosC && pontosC == 5){
     pontos = 0; 
     acertos = 0;
     pontosC = 3;
     tela = 15;
     erros = 0;
     erro = 0;
     cont = 0;
  }
  if(erros == 3){
     pontos = 0; 
     pontosC = 3;
     acertos = 0;
     tela = 14;
     erros = 0;
     erro = 0;
     cont = 0;
  }
   
  if(contCE1 != 0 || contCE2 != 0 || contCE3 != 0){
     textSize(30);
     fill(255); 
     text(valor, 170, 295);
  }
  textSize(17);
  fill(255); 
  text("Pontos: "+pontos, 150, 50);
  text(" / "+pontosC, 230, 50);
  text("Erros: "+erros, 280, 50);
  text("/ 3", 350, 50);
  
  if(mouseIsPressed && dist(xE1, yE1, mouseX, mouseY) < 20){
     xE1 = mouseX;
     yE1 = mouseY; 
    fill(255);
    ellipse(xE1, yE1, 40, 40);
  }if(mouseIsPressed && dist(xE2, yE2, mouseX, mouseY) < 20){
     xE2 = mouseX;
     yE2 = mouseY;
    fill(255);
    ellipse(xE2, yE2, 40, 40);
  }if(mouseIsPressed && dist(xE3, yE3, mouseX, mouseY) < 20){
     xE3 = mouseX;
     yE3 = mouseY;
    fill(255);
    ellipse(xE3, yE3, 40, 40);
  }
  
  if(mouseX > 250 && mouseX < 380 && mouseY > 345 && mouseY < 375){
      fill(255, 100); 
       if(mouseIsPressed){
         xE1 = 100;
         yE1 = 100;
         xE2 = 185;
         yE2 = 100;
         xE3 = 275;
         yE3 = 100;
       }
    }    
} 

function acertoBlz(){
  image(imgblz, 0, 0);
  
  if(mouseX > 192 && mouseX < 312 && mouseY > 305 && mouseY < 335){
    fill(255, 0, 0);   
    if(mouseIsPressed){
       tela = 5; 
       cont = 0;
    }
  }else{
    fill(0, 255, 0);
  }
    stroke(0);
    rect(192, 305, 120, 30, 20);
  
  noStroke();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar ao Jogo", 200, 325);
}

function acertosTop(){
  image(imgtop, 0, 0);
  
  if(mouseX > 42 && mouseX < 162 && mouseY > 305 && mouseY < 335){
    fill(255, 0, 0);   
    if(mouseIsPressed){
       tela = 5; 
       cont = 0;
    }
  }else{
    fill(0, 255, 0);
  }
    stroke(0);
    rect(42, 305, 120, 30, 20);
  
  noStroke();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar ao Jogo", 50, 325);
}

function OpJogarOuTutoD(){
  image(imgM, 0, 0);
  
  fill(255);
  textSize(35); 
  textAlign(20, 20);
  textStyle(BOLD);
  text("Escolinha ", 60, 100);
  fill(255, 0, 0);
  text("C", 235, 100);
  fill(0, 0, 255);
  text("D", 265, 100);
  fill(0, 255, 0);
  text("U", 295, 100);
  textSize(25);
  fill(255);
  textStyle(BOLD);
  textSize(25);
  text("Jogar", 155, 185);
  text("Tutorial", 145, 300);
  noFill(); 
  textSize(15);
  fill(255);
  textStyle(BOLD);
  text("Pressione Esc para voltar", 195, 365);
  
if(mouseX > 145 && mouseX < 225 && mouseY > 150 && mouseY < 200){
    fill(255,150);
    if(mouseIsPressed){
       tela = 6;
       cont = 0;
       Tf = 60;
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
       numAleatorios();
    }
  }else{
    fill(255, 100);
  }
  noStroke();
  rect(150, 150, 80, 50, 20);
  if(mouseX > 135 && mouseX < 240 && mouseY > 270 && mouseY < 310){
    fill(255,150);
    if(mouseIsPressed){
       tela = 19;
       cont = 0;
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
       numAleatorios();   
    }
  }else{
    fill(255, 100);
  }
  noStroke();
  rect(135, 270, 115, 40, 20); 
}

function TutorialD(){
  image(imgM, 0, 0);
  
  c = 9, d = 2, u = 1;
  Tf = 0;
  cont = cont + 1;
  contS = Tf + (int(cont/30));
  
  if(contS < 5){
     textSize(18);
     text("");
     fill(255);
     textStyle(BOLD);
     text("Nesse jogo, ele te dará 3 algarismo", 50, 210);
  }if(contS >= 5){
     noStroke();
     textSize(40);
     fill(255);
     textStyle(BOLD);
     text(c+" "+d+" "+u, 150, 115);
  }
  if(contS >= 6 && contS <= 7){
      noFill();
      stroke(255, 0, 0);
      rect(140, 80, 40, 40);  
  }if(contS > 7 && contS <= 9){
      noFill();
      stroke(0, 0, 255);
      rect(175, 80, 40, 40);
  }if(contS > 9 && contS <= 11){
      noFill();
      stroke(0, 255, 0);
      rect(210, 80, 40, 40);
  }if(contS > 11 && contS <= 20){
      textSize(16);
      fill(255);
      text("Seu objetivo é clicar nas bolas que indica a \nquantidade de: Centena(s), Dezena(s) e \nunidade(s), do número que foi dado.", 24, 210);
  }

  if(contS > 20){
  
      textSize(40);
      fill(255);
      textStyle(BOLD);
      text(c+" "+d+" "+u, 150, 115);
      textSize(20);
      textStyle(BOLD);
      fill(255);
      text("Centena", 50, 150);
      text("Dezena", 160, 150); 
      text("Unidade", 260, 150);
  
      stroke(255);
      noFill();
      rect(50, 160, 80, 90,20);
      rect(155, 160, 80, 90,20);
      rect(260, 160, 80, 90,20);
      fill(255, 100);
      ellipse(70, 190, 20, 20);  
      ellipse(70, 225, 20, 20); 
      ellipse(110, 190, 20, 20); 
      ellipse(110, 225, 20, 20);
      ellipse(90, 210, 20, 20); 
  
      ellipse(175, 190, 20, 20); 
      ellipse(175, 225, 20, 20); 
      ellipse(215, 190, 20, 20); 
      ellipse(215, 225, 20, 20);
      ellipse(195, 210, 20, 20);
  
      ellipse(280, 190, 20, 20);
      ellipse(280, 225, 20, 20); 
      ellipse(320, 190, 20, 20); 
      ellipse(320, 225, 20, 20);
      ellipse(300, 210, 20, 20);
  }  
  
  if(contS > 22 && contS <= 24){
       noFill();
       stroke(255, 0, 0);
       rect(40, 125, 100, 140);
  }if(contS > 24 && contS <= 26){
       noFill();
       stroke(0, 0, 255);
       rect(145, 125, 100, 140);
  }if(contS > 26 && contS <= 28){
       noFill();
       stroke(0, 255, 0);
       rect(250, 125, 100, 140);
  }if(contS > 28 && contS <= 33){
      textSize(18);
      noStroke();
      fill(255);
      text("As bolas pretas, valem 1.", 95, 290);
  }if(contS > 33 && contS <= 36){
    BolasPretas();
     if(cE1 == 1){
       fill(0); 
       ellipse(70, 190, 20, 20); 
     }if(cE2 == 1){
       fill(0); 
       ellipse(70, 225, 20, 20); 
     }if(cE3 == 1){
       fill(0); 
       ellipse(110, 190, 20, 20); 
     }if(cE4 == 1){
       fill(0); 
       ellipse(110, 225, 20, 20); 
     }if(cE6 == 1){
       fill(0); 
       ellipse(175, 190, 20, 20); 
     }if(cE7 == 1){
       fill(0); 
       ellipse(175, 225, 20, 20); 
     }if(cE8 == 1){
       fill(0); 
       ellipse(215, 190, 20, 20); 
     }if(cE9 == 1){
       fill(0); 
       ellipse(215, 225, 20, 20); 
     }if(cE11 == 1){
       fill(0); 
       ellipse(280, 190, 20, 20); 
     }if(cE12 == 1){
       fill(0); 
       ellipse(280, 225, 20, 20); 
     }if(cE13 == 1){
       fill(0); 
       ellipse(320, 190, 20, 20); 
     }if(cE14 == 1){
       fill(0); 
       ellipse(320, 225, 20, 20); 
     }
  }if(contS > 37 && contS <= 40){
      textSize(18);
      noStroke();
      fill(255);
      text("As bolas coloridas, valem 5.", 85, 290);
  }if(contS > 40 && contS <= 43){
    BolasColoridas();
    if(cE5 == 5){
      fill(255, 0, 0); 
      ellipse(90, 210, 20, 20); 
    }if(cE10 == 5){
      fill(0, 0, 255); 
      ellipse(195, 210, 20, 20); 
    }if(cE15 == 5){
      fill(0, 255, 0);
      ellipse(300, 210, 20, 20); 
    } 
  }if(contS > 44 && contS <= 49){ 
      apagarCirculos();
      noStroke();
      textSize(15);
      fill(255);
      text("Tendo isso em mente, experimente reproduzir\nesse número.", 40, 280);
  }
   
if(contS > 49){
  
  conti = conti + 1;
  contis = contis + 1;
  contSeg = Ti - (conti/5);
  contSB = Ti - (contis/5);
  
  if(contSeg <= 0){
    if(dist(70, 190, mouseX, mouseY) < 10){
        fill(0); 
        ellipse(70, 190, 20, 20);
  if(mouseIsPressed){
        cE1 = 1;
        conti = 0;
   }
  } 
  if(dist(70, 225, mouseX, mouseY) < 10){
      fill(0); 
      ellipse(70, 225, 20, 20); 
    if(mouseIsPressed){
      cE2 = 1;
      conti = 0;
    }
  }  
  if(dist(110, 190, mouseX, mouseY) < 10){
      fill(0); 
      ellipse(110, 190, 20, 20); 
    if(mouseIsPressed){
      cE3 = 1;
      conti = 0;
    }
  }
  if(dist(110, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(110, 225, 20, 20); 
     if(mouseIsPressed){
         cE4 = 1;
         conti = 0;
     }
  }
  if(dist(90, 210, mouseX, mouseY) < 10){
    fill(255, 0, 0); 
    ellipse(90, 210, 20, 20); 
     if(mouseIsPressed){
         cE5 = 5;
         conti = 0;
     }
  }   
  if(dist(175, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(175, 190, 20, 20); 
     if(mouseIsPressed){
         cE6 = 1;
         conti = 0;
     }
  }
  if(dist(175, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(175, 225, 20, 20); 
     if(mouseIsPressed){
         cE7 = 1;
         conti = 0;
     }
  }
  if(dist(215, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(215, 190, 20, 20); 
     if(mouseIsPressed){
         cE8 = 1;
         conti = 0;
     }
  }
  if(dist(215, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(215, 225, 20, 20); 
     if(mouseIsPressed){
         cE9 = 1;
         conti = 0;
     }
  }
  if(dist(195, 210, mouseX, mouseY) < 10){
    fill(0, 0, 255);
    ellipse(195, 210, 20, 20); 
     if(mouseIsPressed){
         cE10 = 5;
         conti = 0;
     }
  }
  if(dist(280, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(280, 190, 20, 20); 
     if(mouseIsPressed){
         cE11 = 1;
         conti = 0;
     }
  }
  if(dist(280, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(280, 225, 20, 20); 
     if(mouseIsPressed){
         cE12 = 1;
         conti = 0;
     }
  }
  if(dist(320, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(320, 190, 20, 20); 
     if(mouseIsPressed){
         cE13 = 1;
         conti = 0;
     }
  }
  if(dist(320, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(320, 225, 20, 20); 
     if(mouseIsPressed){
         cE14 = 1;
         conti = 0;
     }
  }
  if(dist(300, 210, mouseX, mouseY) < 10){
    fill(0, 255, 0); 
    ellipse(300, 210, 20, 20); 
     if(mouseIsPressed){
         cE15 = 5;
         conti = 0;
     }
  }
 }
  if(cE1 == 1){
    fill(0); 
    ellipse(70, 190, 20, 20); 
  }if(cE2 == 1){
    fill(0); 
    ellipse(70, 225, 20, 20); 
  }if(cE3 == 1){
    fill(0); 
    ellipse(110, 190, 20, 20); 
  }if(cE4 == 1){
    fill(0); 
    ellipse(110, 225, 20, 20); 
  }if(cE5 == 5){
    fill(255, 0, 0); 
    ellipse(90, 210, 20, 20); 
  }if(cE6 == 1){
    fill(0); 
    ellipse(175, 190, 20, 20); 
  }if(cE7 == 1){
    fill(0); 
    ellipse(175, 225, 20, 20); 
  }if(cE8 == 1){
    fill(0); 
    ellipse(215, 190, 20, 20); 
  }if(cE9 == 1){
    fill(0); 
    ellipse(215, 225, 20, 20); 
  }if(cE10 == 5){
    fill(0, 0, 255); 
    ellipse(195, 210, 20, 20); 
  }if(cE11 == 1){
    fill(0); 
    ellipse(280, 190, 20, 20); 
  }if(cE12 == 1){
    fill(0); 
    ellipse(280, 225, 20, 20); 
  }if(cE13 == 1){
    fill(0); 
    ellipse(320, 190, 20, 20); 
  }if(cE14 == 1){
    fill(0); 
    ellipse(320, 225, 20, 20); 
  }if(cE15 == 5){
    fill(0, 255, 0);
    ellipse(300, 210, 20, 20); 
  } 
    if(contS > 51 && contS <= 59){
      noStroke();
      textSize(15);
      fill(255);
      text("Os números embaixo, indicam a quantidade de\nbolinhas que voçê clicou.", 30, 295);
    }
  if(cE11 == 1){
      noStroke();
      textSize(15);
      fill(255);
      text("Voçê terá um botão para responder.", 80, 287);
  }
     contCent = cE1 + cE2 + cE3 + cE4 + cE5;
     contDeze = cE6 + cE7 + cE8 + cE9 + cE10;
     contUni = cE11 + cE12 + cE13 + cE14 + cE15;
    
    textSize(25);
    noStroke();
    fill(255);
    text(contCent, 75, 275);
    text(contDeze, 180, 275);
    text(contUni, 280, 275);
    fill(255, 0, 0);
    text(" C ", 90, 275);
    fill(0, 0, 255);
    text("D", 200, 275);
    fill(0, 255, 0);
    text("U", 300, 275);
  if(contS > 60){
    
    if(contS > 61 && contS <= 62){
       fill(255, 100);
       noStroke();
       rect(145, 33, 115, 20, 10);
    }
    if(contS > 63 && contS <= 64){
       fill(255, 100);
       noStroke();
       rect(265, 33, 115, 20, 10);
    }
  
    if(pontos == 1 && erros == 1){
       noStroke();
       textSize(18);
       fill(255); 
       text("Tempo: X", 25, 50);
       textSize(15);
       fill(255);
       text("Voçê terá um tempo X para fazer\n            os pontos exigidos.", 145, 340);
      
    if(mouseX > 285 && mouseX < 345 && mouseY > 280 && mouseY < 320){
    fill(10, 100);   
    if(mouseIsPressed){
       tela = 21; 
    }
   }else{
    fill(0, 255, 0);
   } 
    stroke(0);
    rect(285, 280, 60, 40, 20);
       
       noStroke();
       textSize(25);
       fill(255);
       textStyle(BOLD);
       text("OK!", 290, 310); 
       noFill();  
   } 
    
    if(contS > 61){
       textSize(17);
       fill(255); 
       text("Pontos: "+pontos, 150, 50);
       text(" / "+pontosC, 230, 50);
    }if(contS > 63){
     text("Erros: "+erros, 280, 50);
     text("/ 3", 350, 50);
    }
    
      if(contSB <= 0){ 
   
         textSize(20);
         fill(255);
         noStroke();
         textStyle(BOLD);
         text("Responder", 150, 313); 
         noFill();
      if(mouseX > 145 && mouseX < 260 && mouseY > 290 && mouseY < 325){
    fill(200,100);
    if(mouseIsPressed){ 
       contis = 0;
       if(contCent == c && contDeze == d && contUni == u){
             contis = 0;
             pontos = acertos + 1;
             acertos = pontos;
             numAleatorios();
             apagarCirculos();  
       }else{
          if(contCent != c || contDeze != d || contUni != u){
             contis = 0;
             erros = erro + 1;
             erro = erros;
             numAleatorios();
             apagarCirculos();
          } 
       }  
    }
  }else{
    fill(255, 100);
  } 
    noStroke();
    rect(145, 290, 115, 35, 20);
   }    
  }
 }
}

function BolasColoridas(){
   cE5 = 5, cE10 = 5, cE15 = 5;  
}

function BolasPretas(){
  cE1 = 1, cE2 = 1, 
  cE3 = 1, cE4 = 1, 
  cE6 = 1, cE7 = 1, 
  cE8 = 1, cE9 = 1,  
  cE11 = 1, cE12 = 1, 
  cE13 = 1, cE14 = 1; 
}

function TelaImforDec(){
  image(imgM, 0, 0); 
  
  fill(255);
  textSize(35); 
  textAlign(20, 20);
  textStyle(BOLD);
  text("Escolinha ", 60, 100);
  fill(255, 0, 0);
  text("C", 235, 100);
  fill(0, 0, 255);
  text("D", 265, 100);
  fill(0, 255, 0);
  text("U", 295, 100);
  textSize(15);
  fill(255);
  text("Se voçê errar 3 vezes, vc perde!", 30, 150);
  text("Se o tempo acabar e voçê não atingir os pontos\nexigidos, voçê perde!", 30, 180);
  textSize(13);
  text("Sem mais delongas, vamos para nossa dirversão!!!", 30, 230);
  
  textSize(25);
  fill(255);
  textStyle(BOLD);
  text("Jogar", 50, 300); 
  noFill();
  if(mouseX > 45 && mouseX < 130 && mouseY > 273 && mouseY < 313){
    fill(10, 100);   
    if(mouseIsPressed){
       tela = 6; 
       cont = 0;
       Tf = 60;
       valor = 0;
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
       numAleatorios();
       apagarCirculos();
    }
  }else{
    fill(255, 100);
  } 
    noStroke();
    rect(45, 273, 85, 40, 20);
}

function fasesD(){
  image(imgM, 0, 0);
  
  cont = cont + 1;
  conti = conti + 1;
  contis = contis + 1;
  contS = Tf - (int(cont/30)); 
  contSeg = Ti - (conti/5);
  contSB = Ti - (contis/5);
  
  fill(255);
  textSize(20);
  text(contS, 100, 50);
  textSize(20);
  text("Tempo: ", 25, 50);

   if(contS == 0){
     tela = 14;
     cont = 0;
     pontos = 0;
     pontosC = 3;
     acertos = 0;
     erros = 0;
     erro = 0;
     numAleatorios();
     letraAleatorias();
     apagarCirculos();
  }
   if(c == 0 && d == 0 && u == 0){
    numAleatorios();
  }
   if(p1 == 0 && p2 == 0 && p3 == 0){
    letraAleatorias();
  } 
   
  textSize(15);
  fill(255);
  textStyle(BOLD);
  text("Voltar ao Menu", 265, 365); 
  noFill(); 
  if(mouseX > 250 && mouseX < 380 && mouseY > 345 && mouseY < 375){
    fill(255, 100); 
    if(mouseIsPressed){
       tela = 0;
       cont = 0; 
       pontos = 0;
       pontosC = 3;
       acertos = 0;
       erros = 0;
       erro = 0;
       numAleatorios();
       letraAleatorias();
       apagarCirculos();
    }
  }else{
    noFill();
  }
  noStroke();
  rect(250, 345, 130, 30,20);
  textSize(40);
  fill(255);
  textStyle(BOLD);
  text(c+" "+d+" "+u, 150, 115);
  textSize(20);
  textStyle(BOLD);
  fill(255);
  text("Centena", 50, 150);
  text("Dezena", 160, 150); 
  text("Unidade", 260, 150);
  
  stroke(255);
  noFill();
  rect(50, 160, 80, 90,20);
  rect(155, 160, 80, 90,20);
  rect(260, 160, 80, 90,20);
  fill(255, 100);
  ellipse(70, 190, 20, 20);  
  ellipse(70, 225, 20, 20); 
  ellipse(110, 190, 20, 20); 
  ellipse(110, 225, 20, 20);
  ellipse(90, 210, 20, 20); 
  
  ellipse(175, 190, 20, 20); 
  ellipse(175, 225, 20, 20); 
  ellipse(215, 190, 20, 20); 
  ellipse(215, 225, 20, 20);
  ellipse(195, 210, 20, 20);
  
  ellipse(280, 190, 20, 20);
  ellipse(280, 225, 20, 20); 
  ellipse(320, 190, 20, 20); 
  ellipse(320, 225, 20, 20);
  ellipse(300, 210, 20, 20);
 
if(contSeg <= 0){ 
  if(dist(70, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(70, 190, 20, 20);
      if(mouseIsPressed){
           cE1 = 1;
           conti = 0;
      }
  } 
  if(dist(70, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(70, 225, 20, 20); 
     if(mouseIsPressed){
          cE2 = 1;
          conti = 0;
     }
  }  
  if(dist(110, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(110, 190, 20, 20); 
     if(mouseIsPressed){
         cE3 = 1;
         conti = 0;
     }
  }
  if(dist(110, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(110, 225, 20, 20); 
     if(mouseIsPressed){
         cE4 = 1;
         conti = 0;
     }
  }
  if(dist(90, 210, mouseX, mouseY) < 10){
    fill(255, 0, 0); 
    ellipse(90, 210, 20, 20); 
     if(mouseIsPressed){
         cE5 = 5;
         conti = 0;
     }
  }   
  if(dist(175, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(175, 190, 20, 20); 
     if(mouseIsPressed){
         cE6 = 1;
         conti = 0;
     }
  }
  if(dist(175, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(175, 225, 20, 20); 
     if(mouseIsPressed){
         cE7 = 1;
         conti = 0;
     }
  }
  if(dist(215, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(215, 190, 20, 20); 
     if(mouseIsPressed){
         cE8 = 1;
         conti = 0;
     }
  }
  if(dist(215, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(215, 225, 20, 20); 
     if(mouseIsPressed){
         cE9 = 1;
         conti = 0;
     }
  }
  if(dist(195, 210, mouseX, mouseY) < 10){
    fill(0, 0, 255);
    ellipse(195, 210, 20, 20); 
     if(mouseIsPressed){
         cE10 = 5;
         conti = 0;
     }
  }
  if(dist(280, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(280, 190, 20, 20); 
     if(mouseIsPressed){
         cE11 = 1;
         conti = 0;
     }
  }
  if(dist(280, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(280, 225, 20, 20); 
     if(mouseIsPressed){
         cE12 = 1;
         conti = 0;
     }
  }
  if(dist(320, 190, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(320, 190, 20, 20); 
     if(mouseIsPressed){
         cE13 = 1;
         conti = 0;
     }
  }
  if(dist(320, 225, mouseX, mouseY) < 10){
    fill(0); 
    ellipse(320, 225, 20, 20); 
     if(mouseIsPressed){
         cE14 = 1;
         conti = 0;
     }
  }
  if(dist(300, 210, mouseX, mouseY) < 10){
    fill(0, 255, 0); 
    ellipse(300, 210, 20, 20); 
     if(mouseIsPressed){
         cE15 = 5;
         conti = 0;
     }
  }
}
  if(cE1 == 1){
    fill(0); 
    ellipse(70, 190, 20, 20); 
  }if(cE2 == 1){
    fill(0); 
    ellipse(70, 225, 20, 20); 
  }if(cE3 == 1){
    fill(0); 
    ellipse(110, 190, 20, 20); 
  }if(cE4 == 1){
    fill(0); 
    ellipse(110, 225, 20, 20); 
  }if(cE5 == 5){
    fill(255, 0, 0); 
    ellipse(90, 210, 20, 20); 
  }if(cE6 == 1){
    fill(0); 
    ellipse(175, 190, 20, 20); 
  }if(cE7 == 1){
    fill(0); 
    ellipse(175, 225, 20, 20); 
  }if(cE8 == 1){
    fill(0); 
    ellipse(215, 190, 20, 20); 
  }if(cE9 == 1){
    fill(0); 
    ellipse(215, 225, 20, 20); 
  }if(cE10 == 5){
    fill(0, 0, 255); 
    ellipse(195, 210, 20, 20); 
  }if(cE11 == 1){
    fill(0); 
    ellipse(280, 190, 20, 20); 
  }if(cE12 == 1){
    fill(0); 
    ellipse(280, 225, 20, 20); 
  }if(cE13 == 1){
    fill(0); 
    ellipse(320, 190, 20, 20); 
  }if(cE14 == 1){
    fill(0); 
    ellipse(320, 225, 20, 20); 
  }if(cE15 == 5){
    fill(0, 255, 0);
    ellipse(300, 210, 20, 20); 
  } 
  
  contCent = cE1 + cE2 + cE3 + cE4 + cE5;
  contDeze = cE6 + cE7 + cE8 + cE9 + cE10;
  contUni = cE11 + cE12 + cE13 + cE14 + cE15; 
  
 if(contSB <= 0){ 
   
  textSize(20);
  fill(255);
  noStroke();
  textStyle(BOLD);
  text("Responder", 150, 313); 
  noFill();
  if(mouseX > 145 && mouseX < 260 && mouseY > 290 && mouseY < 325){
    fill(200,100);
    if(mouseIsPressed){ 
       contis = 0;
       if(contCent == c && contDeze == d && contUni == u){
             contis = 0;
             pontos = acertos + 1;
             acertos = pontos;
             numAleatorios();
             apagarCirculos();  
       }else{
          if(contCent != c || contDeze != d || contUni != u){
             contis = 0;
             erros = erro + 1;
             erro = erros;
             numAleatorios();
             apagarCirculos();
          } 
       }  
    }
  }else{
    fill(255, 100);
  } 
    noStroke();
    rect(145, 290, 115, 35, 20);
}    
  if(pontos == pontosC && pontosC == 3){
     pontos = 0; 
     acertos = 0;
     pontosC = pontosC +1;
     tela = 26;
     erros = 0;
     erro = 0;
     cont = 0;
  }
  if(pontos == pontosC && pontosC == 4){
     pontos = 0; 
     acertos = 0;
     pontosC = pontosC +1;
     tela = 27;
     erros = 0;
     erro = 0;
     cont = 0;
  }
  if(pontos == pontosC && pontosC == 5){
     pontos = 0; 
     acertos = 0;
     pontosC = 3;
     tela = 15;
     erros = 0;
     erro = 0;
     cont = 0;
  }
  if(erros == 3){
     pontos = 0; 
     pontosC = 3;
     acertos = 0;
     tela = 14;
     erros = 0;
     erro = 0;
     cont = 0;
  }
  
  textSize(25);
  noStroke();
  fill(255);
  text(contCent, 75, 275);
  text(contDeze, 180, 275);
  text(contUni, 280, 275);
  fill(255, 0, 0);
  text(" C ", 90, 275);
  fill(0, 0, 255);
  text("D", 200, 275);
  fill(0, 255, 0);
  text("U", 300, 275);
  textSize(17);
  fill(255); 
  text("Pontos: "+pontos, 150, 50);
  text(" / "+pontosC, 230, 50);
  text("Erros: "+erros, 280, 50);
  text("/ 3", 350, 50);
} 

function acertoGanhei(){
  image(imgganhei, 0, 0);
  
  if(mouseX > 7 && mouseX < 127 && mouseY > 15 && mouseY < 45){
    fill(255, 0, 0);   
    if(mouseIsPressed){
       tela = 6; 
       cont = 0;
    }
  }else{
    fill(0, 255, 0);
  }
    stroke(0);
    rect(7, 15, 120, 30, 20);
  
  noStroke();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar ao Jogo", 15, 35);
}

function acertoAcer(){
  image(imgacer, 0, 0);
  
  if(mouseX > 7 && mouseX < 127 && mouseY > 15 && mouseY < 45){
    fill(255, 0, 0);   
    if(mouseIsPressed){
       tela = 6; 
       cont = 0;
    }
  }else{
    fill(0, 255, 0);
  }
    stroke(0);
    rect(7, 15, 120, 30, 20);
  
  noStroke();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("Voltar ao Jogo", 15, 35);
}

function apagarCirculos(){
   cE1 = 0, cE2 = 0, 
   cE3 = 0, cE4 = 0, 
   cE5 = 0, cE6 = 0, 
   cE7 = 0, cE8 = 0, 
   cE9 = 0, cE10 = 0, 
   cE11 = 0, cE12 = 0, 
   cE13 = 0, cE14 = 0, 
   cE15 = 0;
}

function numAleatorios(){
  num = int(random(0, 9));
  num1 = int(random(0, 9));
  num2 = int(random(0, 9));
  c = num;
  d = num1;
  u = num2;
}

function letraAleatorias(){
  n = int(random(0, palavras.length)); 
  p1 = palavras[n];
  n = int(random(0, palavras.length));
  p2 = palavras[n];
  while(p1 == p2){
     n = int(random(0, palavras.length));
     p2 = palavras[n]; 
  }
  n= int(random(0, palavras.length));
  p3 = palavras[n]; 
   while(p1 == p3 || p2 == p3){
        n = int(random(0, palavras.length));
        p3 = palavras[n]; 
   } 
  if(p1 == "C" && p2 == "D" && p3 == "U"){
     soma[0] = c*100;
     soma[1] = d*10; 
     soma[2] = u; 
    somaC = soma[0] + soma[1] + soma[2];
  }if(p1 == "C" && p2 == "U" && p3 == "D"){
     soma[0] = c*100;
     soma[1] = d; 
     soma[2] = u*10; 
    somaC = soma[0] + soma[1] + soma[2];
  }if(p1 == "D" && p2 == "C" && p3 == "U"){
     soma[0] = c*10;
     soma[1] = d*100; 
     soma[2] = u; 
    somaC = soma[0] + soma[1] + soma[2];
  }if(p1 == "U" && p2 == "C" && p3 == "D"){
     soma[0] = c;
     soma[1] = d*100; 
     soma[2] = u*10; 
    somaC = soma[0] + soma[1] + soma[2];
  }if(p1 == "D" && p2 == "U" && p3 == "C"){
     soma[0] = c*10;
     soma[1] = d; 
     soma[2] = u*100; 
    somaC = soma[0] + soma[1] + soma[2];
  }if(p1 == "U" && p2 == "D" && p3 == "C"){
     soma[0] = c;
     soma[1] = d*10; 
     soma[2] = u*100; 
    somaC = soma[0] + soma[1] + soma[2];
  }
} 

function Diploma(){
  image(imgD, 0, 0);
  
  textStyle(BOLD);
  textSize(15);
  fill(0);
  text("Pressione Esc para voltar ao menu", 55, 370);
  
  if(keyIsPressed == "Escape"){
        tela = 0;
  }
}

function Game_Over(){
  image(imgO, 0, 0);
  
  fill(0);
  textStyle(BOLD);
  textSize(50); 
  noStroke();
  text("Game Over", 50, 50);
  textStyle(BOLD);
  textSize(15);
  text("Pressione Esc para voltar", 10, 390);
  
  if(keyIsPressed == "Escape"){
        tela = 0;
  }
}

function InformaçõesGame(){
  image(imgI, 0, 0);
  
  fill(255);
  textStyle(BOLD);
  textSize(23); 
  text("Informações ", 130, 50);
  textSize(15);
  noStroke();
  text("Descrição do Game:\nO Game Consiste em compor e decompor números\nnaturais de até ordem três em um intervalo de tempo,\nfazendo com que os alunos entendam a formação dos\nnúmeros: C, D e U(Centena, Dezena e Unidade),\ne na resolução de problema dos mesmos.", 10, 70); 
  fill(255);
  textStyle(BOLD);
  text("Pressione Esc para voltar", 10, 390); 
  text("Habilidade:\n\n(EF02MA04)", 150, 230);  
} 

function CreditosGame(){
  image(imgC, 0, 0);
  image(imgP, 240, 90);
  
  fill(0);
  textStyle(BOLD);
  textSize(50); 
  noStroke();
  text("Créditos", 100, 50);
  textSize(15);
  text("Desenvolverdor: João Vitor da Costa Gomes", 50, 80);
  fill(255);
  textStyle(BOLD);
  text("Pressione Esc para voltar", 10, 390);
}

function keyPressed(){
  if(key == "ArrowUp" && y > 120){
     y = y - 100; 
     opção = opção - 1;
  }if(key == "ArrowDown" && y <= 280){
     y = y + 100;
     opção = opção + 1;
  }if(key=="Enter"){
     tela = opção; 
  }if(key=="Escape"){
    tela = 0;
  }
}
