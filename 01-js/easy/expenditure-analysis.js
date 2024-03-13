/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let spendEstimates={}

  for(var i=0;i<transactions.length;i++){
    var t=transactions[i];
    if(spendEstimates[t.category]){
      spendEstimates[t.category]=spendEstimates[t.category]+t.price;
    }else{
      spendEstimates[t.category]=t.price;
    }
  }
/////////////////////////////////given an object now convert it into an array and print the shit out of it///
  var keys=Object.keys(spendEstimates)//array format m show krdega ye keys //array as an input
  console.log(spendEstimates);

    let answer=[];
    for(var i=0;i<keys.length;i++){
      var category=keys[i];//ye category ko denote krta (different iteration m)hai jo upr se ayi hai 
      var obj={
        category: category,
        totalSpent:spendEstimates[category]
      }
      answer.push(obj);
    }
    return answer;
  
}


module.exports = calculateTotalSpentByCategory;
