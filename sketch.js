var bullet,bulletimg;
var wall;
var speed;
var weight;
var thickness;
var siran;
var bunker,bunkerimg;

function preload(){

bulletimg = loadImage("bullet.png");
bunkerimg = loadImage("bunker.jpg");

}

function setup(){

createCanvas(1600,400);    

speed = Math.round(random(223,321));
weight = Math.round(random(30,52));
thickness = Math.round(random(22,83));

wall = createSprite(1200,200,thickness,canvas.height/2);
wall.shapeColor = "white"

bullet = createSprite(100,200)
bullet.addImage("bullet",bulletimg);
bullet.scale = 0.1;
bullet.velocityX = speed;

siran = createSprite(1000,100,90,90);
siran.shapeColor = "white";

bunker = createSprite(700,100);
bunker.addImage("bunker",bunkerimg);

}

function draw(){

background(0);

if(wall.x - bullet.x < (wall.width + bullet.width)/2 - 280){

bullet.velocityX = 0;

var deformation = Math.round((0.5 * weight * speed *speed) / (thickness * thickness * thickness));

if(deformation > 10){

siran.shapeColor = "red";

}

if(deformation < 10){

siran.shapeColor = "green";

}

collide();

}

drawSprites();

fill(rgb(255,255,255));
textSize(20);
text("SIRAN",siran.x - 30,siran.y - 50)
text("Press space to test the wall again",30,60);
text("Weight : " + weight +"g",60,260);
text("Speed : " + speed + "km/h",60,300);
text("Thickness : " + thickness,60,340);
text("Deformation : " + deformation,60,380);

}

function collide(){

  if(wall.x - bullet.x < (wall.width + bullet.width)/2 - 280){

    bullet.velocityX = 0;
    
    var deformation = Math.round((0.5 * weight * speed *speed) / (thickness * thickness * thickness));
    
    if(deformation > 10){
    
    siran.shapeColor = "red";
    
    }

    }
    
    if(deformation < 10){
    
    siran.shapeColor = "green";
    
    }

  if(keyDown("space")){

    bullet.x = 100;
    speed = Math.round(random(223,321));
    weight = Math.round(random(30,52));
    thickness = Math.round(random(22,83));
    bullet.velocityX = speed;
    siran.shapeColor = "white";
    wall.width = thickness;
    
    }

}