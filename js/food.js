function preload(){
  loadImage = ("Milk.png")
}

var addFood=creatButton("Add Food");
addFood.position(500,125);

if(addFood.mousePressed(function(){
  foodS=foodS+1;
  gameState=2;
  database.ref('/').update({'gameStae':gameState})
}));



