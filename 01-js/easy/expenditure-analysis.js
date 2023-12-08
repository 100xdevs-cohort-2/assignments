/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,s
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let results=[];
  let obj={};
  for (let i=0; i<transactions.length; i++){
    let t=transactions[i];
    if (obj[t.category])
      obj[t.category]+=t.price;
    else
      obj[t.category]=t.price;
  }
  let keys=Object.keys(obj);
  for (i=0; i<keys.length; i++){
    let result={
      category: keys[i],
      totalSpent: obj[keys[i]]
    }
    results.push(result)
  }
  return results;
}

module.exports = calculateTotalSpentByCategory;
