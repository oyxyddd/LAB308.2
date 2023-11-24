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
for (let w = 1; w <=3; w++) { 
    plantArea = plantNb * (plantGrowRate ** (w-1)) * spacePerPlant;
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

  //Part2: Thinking Bigger
  const newPlantNb = 100;
  const week = 10;
  plantArea = newPlantNb * (plantGrowRate ** (week-1)) * spacePerPlant; 
  const additionalArea = Math.round(plantArea - area);
  const newRadius = Math.round(Math.sqrt(plantArea / PI));
  console.log(`The additional space required is ${additionalArea}. 
  The radius of the expanded garden is ${newRadius}`)

// Part3: Errors in Judgement
try{
    plantArea = newPlantNb * (plantGrowRate ** (1-1)) * spacePerPlant; 
    if(plantArea < area){
        console.log()
    }else{
        throw "Error-area is not big enough"
    }
} catch(error){
    console.log(error);
}