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
  const list = {};
  for (const item of transactions) {
    const {category,price} = item;

    if(!Object.hasOwn(list,category)){
      list[category] = price;
    }else{
      list[category] += price;
    };
  };

  const result = Object.keys(list).map((ele)=>{return {category:ele,totalSpent:list[ele]}});
  return result;
};

// time complexity - O(n)
// space complexity - O(m) {where m is the number of unique categories.}
module.exports = calculateTotalSpentByCategory;
