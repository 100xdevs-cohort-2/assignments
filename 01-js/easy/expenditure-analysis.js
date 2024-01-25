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
  const output = [];
  let k=0;

  for(let i=0; i<transactions.length; i++){
    //check if current category exists or not 
    let flag=false;
    for(let j=0; j<output.length; j++){
      if(output[j]["category"] == transactions[i]["category"]){
        output[j]["totalSpent"] = output[j]["totalSpent"]+ transactions[i]["price"];
        flag = true;
        break;
      }

    }
    if(flag == false){
      output[k++] = {"category": transactions[i]["category"], "totalSpent": transactions[i]["price"]};
    }
    
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
