var play,about,playimg,aboutimg,back,backImg,aboutbg;
var soundimg,nosoundimg;
var logo,logoimg;
var time=100;
var gameState="wait"
var bg1,bg2;
var wallGroup,wls
var score;

function preload(){
    aboutimg=loadImage("buttons23/about1.png")
    nosoundoimg=loadImage("buttons23/nosound1.png")
    soundimg=loadImage("buttons23/sound1.png")

    playimg=loadImage("buttons23/play1.png")
    logoimg=loadImage("load/Logo.gif")

    bg1=loadImage("maps/bgl1.png")
    bg2=loadImage("maps/bgl2.png")
    aboutbg=loadImage("load/about.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight)

play=createSprite(100,100,20,20)
play.addImage(playimg)


about=createSprite(100,200,20,20)
about.addImage(aboutimg)

sound=createSprite(100,300,20,20)
sound.addImage(soundimg)

nosound=createSprite(100,400,20,20)
nosound.addImage(nosoundoimg)

back=createSprite(windowWidth/2,windowHeight-50,30,20)
back.visible=false
back.addImage(aboutimg)

plr=createSprite(600,100,20,20)
plr.visible=false

eny=createSprite(120,370,100,100)
eny.visible=false
    
wallGroup = new Group();
bulletGroup = new Group()
}

function draw(){
//background(logoimg)


if (gameState==="wait"){

    background(logoimg)}

if(mousePressedOver(play)){
    gameState="play"
    plr.visible=true
}
if(mousePressedOver(about)){
    gameState="about"
  
}

if (gameState==="play"){
    background(bg1)
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false
    plr.visible=true
    eny.visible=true
    if(frameCount % 25 ==0){ 
        time--;
      }
      fill(0)
      textSize(20)
text("Time Left : "+time, 100,50)
    

    

var wall1=createSprite(20,310,5,600)
//wall1.visible=false
var wall2=createSprite(1335,310,5,600)
//wall2.visible=false
var wall3=createSprite(windowWidth/2,25,windowWidth,5)
//wall3.visible=false
var wall4=createSprite(windowWidth/2,620,windowWidth,5)
//wall4.visible=false
var wall5=createSprite(490,223,910,58)
//wall5.visible=false
var wall6=createSprite(120,425,200,50)
//wall6.visible=false
var wall7=createSprite(900,453,850,53)
//wall7.visible=false

wls=[wall1,wall2,wall3,wall4,wall5,wall6,wall7]


for(var i = 0;i<7;i++){
  wallGroup.add(wls[i]);
}


plr.velocityY = 3
plr.collide(wallGroup)

if(keyDown("LEFT_ARROW")){
    plr.x=plr.x-5
}

if(keyDown("RIGHT_ARROW")){
    plr.x=plr.x+5
}

if(keyDown("UP_ARROW")){
    plr.velocityY=-5
} 

spawnplrBullet();

if(bulletGroup.isTouching(eny)){
    //eny.visible=false
    eny.destroy()
console.log("bullet")
}
    



}

if(gameState==="about"){
    background(aboutbg)
    play.visible=false
    about.visible=false
    sound.visible=false
    nosound.visible=false
    back.visible=true
    

   


    if(mousePressedOver(back)){
        gameState="wait"
    }
   
}





    drawSprites()    
}



function spawnplrBullet(){
//var bullet =createSprite(plr.position.x,plr.position.y,10,1)
var bullet =createSprite(plr.position.x,plr.position.y,10,1)
bullet.visible=false
   if(keyDown("q") && keyDown("RIGHT_ARROW")){
    bullet.visible=true
    bullet.velocityX = 10
    }

    if(keyDown("q") && keyDown("LEFT_ARROW")){
        //var bullet =createSprite(plr.position.x,plr.position.y,10,1)
        bullet.visible=true
        bullet.velocityX = -10
        }
    
        bullet.lifetime = 100 ; 
        
bulletGroup.add(bullet)
    

    
}
