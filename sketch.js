//Create variables here

function preload(){
  loadImage = ("Dog.png")
  loadImage = ("Dog1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  
  background("yellow")

  drawSprites();
  //add styles here

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
} );
foodObj.display();
writeStock(foodS);

if(foods == 0){
dog.addImage(happyDog);
milkBotitie2.visible=fasle;
}else{
  dog.addImage(sadDog);
milkBotle2.visible=true;
}

if(gameState===1){ 
  dog.addImage(happyDog);
  dog.sacle=0.175;
  dog.y=250;
}


if(gameState===2){
  dog.aggImage(sadDog);
  dog.scale=0.175;
  milkbotle2.visible=false
  dog.y=250;
}

var Bath=createButton("I want to take bath");
Bath.position(580,125);
if(Bath.mousePressed(function(){
  gameState=3;
  database.ref('/').update({'gameState':gameState});
  }));

if(gameState===3){
  dog.addImage(washroom);
  dog.scale=1;
  milkBotle2.visible=false;
  }

  var play=createButton("lets play !");
  play.position(500,160)
  if(play.mousePressed(function(){
    gameState=5;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===5){
    dog.addImage(livingroom);
    dog.scale=1;
    milkBotltle2.visible=fasle;
  }

var PlayInGarden=createButton("Lets play in park")
PlayInGarden.position(585,160);
if(PlayInGarden.mousePressed(function(){
  gameState=6;
  database.ref('/').update({'gameState':gameState});
}))
if(gameState===6){
  dog.y=175;
  dog.addImage(garden);
  dog.scale=1;
  milkBotltle2.visible=false;
}



//Function to read values from DB
function readStock(data)
{
  food=data.val();
}

//Function to wrtie values in Db
function writeStock(x){


  database.ref('/').update({
    Food:x
  })

display()
  var x=80,y=100

  imageMode(CENTER);
  image(this.image,720,220,70,70);

 if(this.foodStock=0){
   for(var i=0;i<this.foodStock;i++){
     if(i%10==0){
       x=80;
       y=y+50;

     }
     image(this.image,x,y,50,50);
     x=x+30;
    }
  }
}
