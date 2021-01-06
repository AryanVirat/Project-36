var dogImg,canvas,lastFed,fedTime,foodobj,feed,addFood,food1,foodCount,input,milk,milkImg,dog,happyDogImg,database,foodStock,foodS;

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  milkImg = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(650, 600);
  

 

  dog = createSprite(250,280,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.3;

  milk = createSprite(650, 250);
  milk.addImage(milkImg);
  milk.scale = 0.1;
  milk.visible = false;
  milk.rotation = 55;



  

  addFood = createButton("Add Food");
  addFood.position(370, 45);
  addFood.mousePressed(addFood);

  input = createInput("Your Dog's Name");
  input.position(150, 70);

  feed = createButton("feed Your Dog");
  feed.position(450, 45);
  feed.mousePressed(feedDog);

  canvas = createCanvas(800, 400);

}


function draw() {  
background("46, 139, 87");
  

  drawSprites();
}

function feedDog(){

  food1.getFoodStock();
  food1.updateFedTime();

  if(foodCount === 0){
      foodCount = 0;
      milk.visible = false;
      dog.addImage(dogImg);
  }else {
    food1.updateFoodStock(foodCount - 1);
    milk.visible = true;
    dog.addimage(happyDogImg);
  }   
}

function addfoods(){
   food1.getFoodStock();

   food1.updateFoodStock(foodCount + 1);
}



