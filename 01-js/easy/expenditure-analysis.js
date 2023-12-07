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
  
  // declare a object to store category wise total amount
  let obj = {};
  
  // run a forEach loop on transation
 transactions.forEach(Element => {

    // Extract category and price from Element because element contains four item and we need only these two
    let {category, price} = Element;

    // if we already tackle a partiular type of category then we have to only add price other wise we create new object
    if(!obj[category]){
      obj[category] = price;
    }
    else{
      obj[category] += price;
    }

  });

  // Now we convert this object to array of object
  let ans = Object.keys(obj).map(category=>({
    ["category"] : category,
    ["totalSpent"] : obj[category]
  }))

  // Return thee answer
  return ans;
  
}

module.exports = calculateTotalSpentByCategory;
