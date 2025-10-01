// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.


// ex -> numBottles=9, numExchange=3 => totalDrinkBottles=13
// ex -> numBottles=15, numExchange=4 => 19


function numWaterBottles(numBottles,numExchange){
  let totalDrinkBottles=numBottles;
  let emptyBottles=numBottles;
  while(emptyBottles >= numExchange){
    let newFullBottles=Math.floor(emptyBottles/numExchange);

    totalDrinkBottles+=newFullBottles;

    let leftEmptyBottles= emptyBottles % numExchange;
    emptyBottles = leftEmptyBottles+newFullBottles;
  }
  return totalDrinkBottles;
}

console.log(numWaterBottles(15,4));
