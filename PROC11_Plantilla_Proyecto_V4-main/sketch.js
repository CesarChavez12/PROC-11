var sea, ship
var seaImg, shipImg


function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  
  sea = createSprite(0,0,400,400)
  ship = createSprite(200,150,50,50)
  ship.scale=.5
  ship.addAnimation("ship", shipImg)
  sea.addImage("sea", seaImg)
  
}

function draw() {
  background("blue")
  
  sea.velocityX = 2

  if(sea.x <0){
    sea.x=sea.width/2
  }
  drawSprites()
}