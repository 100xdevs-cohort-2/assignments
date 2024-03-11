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
  categoryies_dic = {}
  for (let i=0; i<transactions.length; i++){
    let category = transactions[i].category
    let price = transactions[i].price
    if(categoryies_dic[category]){
      categoryies_dic[category] +=price
    }else{
      categoryies_dic[category] = price
    }
  }
  let result = []
  for (const key in categoryies_dic){
    console.log(key)
    console.log(categoryies_dic[key])
    result.push({category: key,
      totalSpent: categoryies_dic[key]})
  }
  return result
}

module.exports = calculateTotalSpentByCategory;
