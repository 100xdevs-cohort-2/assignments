/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  category = [];
  for(let i=0; i<transactions.length; i++) {
    if(!category.includes(transactions[i]["category"])){
      category.push(transactions[i]["category"]);
    }
  }
  objarr = [];
  let i = 0;
  while(i < category.length){
    let total = 0;
    for(let j=0; j<transactions.length; j++){
      if(category[i] === transactions[j]["category"]){
        total += transactions[j]["price"];
      }
    }
    objarr.push({
      category: category[i],
      totalSpent: total
    });
    i++;
  }
  return objarr;
}

module.exports = calculateTotalSpentByCategory;
