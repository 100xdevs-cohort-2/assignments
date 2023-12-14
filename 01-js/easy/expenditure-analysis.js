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
  const categoryTotal={};

  for (i of transactions){
    const {category,price}=i;
    //console.log("check1"+ category,price);
    if(!categoryTotal[category]){
      categoryTotal[category]=price;
    }
    else {
      categoryTotal[category]+=price;
    }
  }
  //console.log(categoryTotal);
  const result=[];
  let k=Object.keys(categoryTotal);
  //console.log(k);
  for ( i of k){
    result.push({category:i,totalSpent:categoryTotal[i] });
  }
  return result;
}
// const transactions = [
//   { itemName: "Item1", category: "Groceries", price: 50, timestamp: "2023-12-01" },
//   { itemName: "Item2", category: "Electronics", price: 200, timestamp: "2023-12-02" },
//   { itemName: "Item3", category: "Groceries", price: 30, timestamp: "2023-12-03" },
//   { itemName: "Item4", category: "Clothing", price: 80, timestamp: "2023-12-04" },
//   { itemName: "Item5", category: "Electronics", price: 150, timestamp: "2023-12-05" }
// ];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);

module.exports = calculateTotalSpentByCategory;
