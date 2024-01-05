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
  let categoryFound;   // boolean variable to keep track by checking values
  let output=[]; // This will be the final output

  let indexes = transactions.length;

  for(let i=0;i<indexes;i++){
    categoryFound = false;
    let indexes2 = output.length;

    for(let j=0;j<indexes2;j++){
      if(transactions[i]["category"]==output[j]["category"]){
        // "category already exist in output"
        // so now only update the price by adding 

        output[j]["totalSpent"] = output[j]["totalSpent"] + transactions[i]["price"];
        categoryFound=true;
        break;
      }
    }

    if(categoryFound==false){
      // "category not exist in Output"
      // Push this new object for new category found
      output.push({
        category: transactions[i]["category"],
        totalSpent: transactions[i]["price"]
      })
    }
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
