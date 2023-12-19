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
 /* let result = {};

  for (let transaction of transactions) {
    const { category, price } = transaction
    ;

    if (!result[category]) {
      result[category] = 0;
    }

    result[category] += price;
  }

  // Convert result object to the desired output format
  const output = Object.entries(result).map(([category, totalAmount]) => ({
    [category]: totalAmount,
  }));

  return output;*/

  let expenses = {};
  for (const tnx of transactions) {
    expenses[tnx.category] = (expenses[tnx.category] || 0) + tnx.price;
  }

  let output = [];
  for (const category of Object.keys(expenses)) {
    const categoryObj = {};
    categoryObj[category] = expenses[category];
    output.push(categoryObj);
  }

  return output;
}

function calculate(transactions){      //simpler code to understand
  const array1 = [];
  for(let i=0; i<transactions.length; i++){
      let category = transactions[i].category;  //food, food, clothing
      let price = transactions[i].price;  //10,15
      var found = false;
      for(let j=0; j<array1.length; j++){
          console.log(array1[j])
          if(array1[j].category === category){  //food,  
              array1[j].totalSpent += price   //10+20 , 15+25
              found = true
          }
      } 
      if(!found){
          let obj = {
              category: category,
              totalSpent: price
          }
          array1.push(obj)
      }
  }
  return array1;
}


module.exports = calculateTotalSpentByCategory;
