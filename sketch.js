const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){   
        var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
        var responsejson=await response.json(); 
        var dt=responsejson.datetime;
        var hour=dt.slice(11,13)
        console.log(hour);
        if(hour>04 && hour<=06){
            bg="sunrise1.png";
        }
        if(hour>=06 && hour<=08){
            bg="sunrise2.png";
        }
        if(hour>=10 && hour<=12){
            bg="sunrise3.png";
        }
        if(hour>=12 && hour<=14){
            bg="sunrise4.png";
        }
        if(hour>=14 && hour<=16){
            bg="sunrise5.png";
        }
        if(hour>=18 && hour<=20){
            bg="sunrise6.png";
        }
        if(hour>=20 && hour<=22){
            bg="sunset7.png";
        }
        if(hour>=22 && hour<=0){
            bg="sunset8.png";
        }
        if(hour>=0 && hour<=02){
            bg="sunset9.png";
        }
        if(hour>=02 && hour<=04){
            bg="sunset10.png";
        }
        if(hour>=06 && hour<=19){
            bg="sunset11.png";
        }
        if(hour>=06 && hour<=19){
            bg="sunset12.png";
        }
        backgroundImg=loadImage(bg);
    
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
