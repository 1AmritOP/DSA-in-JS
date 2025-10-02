// find the Best Time to Buy and Sell Stock
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxProfit(arr){
    let minVal=-1;
    let maxProfit=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minVal){
            minVal=arr[i];
        }else if(arr[i]-minVal>maxProfit){
            maxProfit=arr[i]-minVal;
        }
    }
    return maxProfit;
}

console.log(maxProfit([4,20,30,1,5,20]));
