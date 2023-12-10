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
  const categories = [];

  for(let i=0;i<transactions.length;i++){
    const category =transactions[i].category
    if(!categories.includes(category)){
      categories.push(category);
    }
  }
  const result = [];
  for(let i=0;i<categories.length;i++){
    let total = 0;
    for(let j=0;j<transactions.length;j++){
      if(transactions[j].category===categories[i]){
        total+=transactions[j].price;
      }
    }
    result.push({category:categories[i] ,totalSpent: total});
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
