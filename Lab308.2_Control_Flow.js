//Part 1: Growing  pain
//Declaire variables

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8; //square meter
const plantNb = 20;
const plantGrowRate = 2;
let plantArea;
let plantAreaRation;
let action;
//Loop through week 1,2,3 and console.log results
for (let w = 0; w <=2; w++) { 
    plantArea = plantNb * (plantGrowRate ** w) * spacePerPlant;
    plantAreaRation = Math.round((plantArea / area) * 100);
    if(plantAreaRation > 80){
        action = "Pruned";
    } else if (plantAreaRation > 50) {
        action = "Monnitored";
    }else{
        action = "Planted";
    }
    console.log(`On week${w+1}, planted plants take up ${plantAreaRation}% of available area.
    The recommended action is "${action}"`)
  }
  