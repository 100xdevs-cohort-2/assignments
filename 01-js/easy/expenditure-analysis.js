/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
   let stringList = [];
   transactions.forEach(transactions => {
      stringList.push(transactions.category);
   });
   let uniqueStringList = [...new Set(stringList)];
   let arrayOfObjects = uniqueStringList.map(category => {
    return { category: category, totalSpent: 0 };
  });
  for(let i=0;i<transactions.length;i++){
     for(let j=0;j<arrayOfObjects.length;j++){
        if(transactions[i].category === arrayOfObjects[j].category){
           arrayOfObjects[j].totalSpent += transactions[i].price;
        }
     }
  }
  return arrayOfObjects;
}

module.exports = calculateTotalSpentByCategory;
