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
  let ans = [];

  //create an object which store each category as kay and price spent as value
  const categorySpent = {}

  transactions.map((transaction)=>{

    // destructuring category and price from tranaction
    const {category, price} = transaction;

    //if there is not key for this category (key) in object then create it
    if(!categorySpent[category]) categorySpent[category] = 0;

    //add price for that key(category)
    categorySpent[category] += price;
  })

  //here key will refer to each category which is used as key-value pair in oject->categorySpent
  for(const key of Object.keys(categorySpent)){
    let myObj = {
      category : key,
      totalSpent : categorySpent[key]
    }
    ans.push(myObj)
  }
  return ans;
}

/*
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
      timestamp: 1656076800000,
      price: 20,
      category: 'Clothing',
      itemName: 'T-shirt',
    },
    {
      id: 3,
      timestamp: 1656076800000,
      price: 15,
      category: 'Food',
      itemName: 'Burger',
    },
  ];

  const result = calculateTotalSpentByCategory(transactions);
  console.log(result);
*/

module.exports = calculateTotalSpentByCategory;
