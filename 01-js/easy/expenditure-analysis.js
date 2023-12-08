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
  let result = [];

  for (const item of transactions) {
    const index = categoryInResult(item);
    if (index != -1) {
      console.log(
        typeof result,
        typeof item.price,
        typeof result[0].totalSpent
      );
      result[index]["totalSpent"] += item.price;
    } else {
      result.push({
        category: `${item.category}`,
        totalSpent: item.price,
      });
    }
  }

  function categoryInResult(singleTran) {
    for (let i = 0; i < result.length; i++) {
      if (singleTran.category === result[i]["category"]) {
        return i;
      }
    }

    return -1;
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
