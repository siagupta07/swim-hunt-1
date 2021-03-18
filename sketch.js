var underwater,underwaterimg
var fishimg,fish2img,rockimg,jellyfishimg,sharkimg


function preload()
{
underwaterimg=loadImage("underwater.jpg")
fishimg=loadImage("fish.png")	
fish2img=loadImage("fish2.png")
jellyfishimg=loadImage("jellyfish.png")
sharkimg=loadImage("shark.png")
rockimg=loadImage("rock.png")
}

function setup() {
	createCanvas(900, 500);
underwater=createSprite(0,250)
underwater.addImage(underwaterimg)
underwater.velocityX=-2;

	
  
}


function draw() {
 if(underwater.x<0){
	 underwater.x=900
 }
 
  
  drawSprites();
 
}



