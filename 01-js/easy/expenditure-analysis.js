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
  let outPut =[];
  
  


  for(let i =0 ; i<transactions.length; i++)
  {

    var found = false;
    let singleObj ={};
    singleObj["category"] = transactions[i]["category"];
    singleObj["totalSpent"] = transactions[i]["price"];

    for(let j =0 ; j<outPut.length; j++)
    {
      if(singleObj["category"] == outPut[j]["category"])
      {
        outPut[j]["totalSpent"] += singleObj["totalSpent"];
        found = true;
        break;  
      }
    }
    if(!found)
      {
        outPut.push(singleObj);
      }
  }

  return outPut;
}

module.exports = calculateTotalSpentByCategory;
