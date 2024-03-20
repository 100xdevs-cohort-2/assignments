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

  How to write the solution:
  - Store the transactions into an array.
  - Loop through the array and calculate the total spent for each category.
  - return an array of objects where each object is unique category-wise and has total price spent as its value.
*/

function calculateTotalSpentByCategory(transactions) {
  // console.log(transactions[1]);
  let TotalSpentByCategory = [];
  for(i=0; i<transactions.length; i++){
    if(!TotalSpentByCategory.some(item => item.category === transactions[i].category)){
      TotalSpentByCategory.push({"category": transactions[i].category, "totalSpent": transactions[i].price});
    }
    else{
      for(j=0;j<TotalSpentByCategory.length;j++){
        if(TotalSpentByCategory[j].category === transactions[i].category){
          TotalSpentByCategory[j].totalSpent =  TotalSpentByCategory[j].totalSpent + transactions[i].price;
        }
      }
    };
  }
  return TotalSpentByCategory;
}

function calculateTotalSpentByCategory2(transactions) {
    let TotalSpentByCategory = {};
    for(let transaction of transactions){
        if(!TotalSpentByCategory[transaction.category]){
            TotalSpentByCategory[transaction.category] = transaction.price;
        }
        else{
            TotalSpentByCategory[transaction.category] += transaction.price;
        }
    }

    // Convert the object into an array of key-value pairs
    let entries = Object.entries(TotalSpentByCategory);

    // Map over the array of entries
    let mappedEntries = entries.map(entry => {
        // Destructure the entry into key and value
        let [category, totalSpent] = entry;

        // Return a new object with the key and value
        return {category, totalSpent};
    });

    // Now mappedEntries is an array of objects
    return mappedEntries;

    // let daaata = Object.entries(TotalSpentByCategory).map(([category, totalSpent]) => ({category, totalSpent}));
    return Object.entries(TotalSpentByCategory).map(([category, totalSpent]) => ({category, totalSpent}));
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];
calculateTotalSpentByCategory2(transactions);

module.exports = calculateTotalSpentByCategory, calculateTotalSpentByCategory2;
