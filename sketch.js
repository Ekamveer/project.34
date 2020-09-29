var dog,happyDog,database,foodS,foodStock;

function preload()
{
  Dog=loadImage("images/dog.png");
  dogHappy=loadImage("images/happydog.png");
}

function setup() {
  database=firebase.database(); 
  console.log(database);
  createCanvas(500, 500);

  dog=createSprite(250,250,20,20);
  dog.addImage(Dog)
  
  foodStock=database.ref('food');
  foodStock.on("value,readStock");
  
}


function draw() { 
  background(46,139,87); 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  text("Press UP_ARROW Key To Feed Drago Milk",200,200);

}



