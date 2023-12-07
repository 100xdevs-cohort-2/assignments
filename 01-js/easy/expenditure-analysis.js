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
  let res = [];
  let set = new Set();
  transactions.forEach((item) => {
    set.add(item["category"]);
  })
  for(let item of set)
  {
    res.push({category : item,totalSpent : 0 })
  }
  for(let item of transactions)
  {
    for(let resultItem of res)
    {

      if(item["category"] === resultItem["category"])
      {
        resultItem["totalSpent"] += item["price"]
      }
    }
  }
  console.log(res);
  return res;
}


module.exports = calculateTotalSpentByCategory;
