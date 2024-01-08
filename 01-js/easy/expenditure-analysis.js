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
  let category_totals = {};

  for(let i = 0; i<transactions.length; i++){
    const cur_category = transactions[i].category;
    const cur_price = transactions[i].price;
    if(!category_totals[cur_category]){
      category_totals[cur_category] = cur_price
    } 
    else{
      category_totals[cur_category] += cur_price;
    }
  }
  const result = Object.keys(category_totals).map((cur_category) => ({category:cur_category,totalSpent: category_totals[cur_category]}));

  /*transactions.forEach(transaction => {
    const category = transaction['category'];
    const price = transaction['price'];

    if (category in category_totals){
      category_totals[category] += price;
    }
    else{
      category_totals[category] = price;
    }
    
  });*/
  //const result = Object.entries(category_totals).map(([category,price]) => ({[category]: price}))
  return result
}

module.exports = calculateTotalSpentByCategory;
