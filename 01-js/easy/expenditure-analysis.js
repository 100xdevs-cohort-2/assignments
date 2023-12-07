/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let invoice = [];
  
  for (let i = 0; i < transactions.length; i++) {
    let categoryAlreadyExists = false
    
    if (invoice.length) {
      for (let j = 0; j < invoice.length; j++) {
        if (invoice[j].category === transactions[i].category) {
          invoice[j].totalSpent += transactions[i].price
          categoryAlreadyExists = true
        } 
      }
    }

    if (!categoryAlreadyExists) {
      invoice.push({ category: transactions[i].category, totalSpent: transactions[i].price }) 
    }
  }

  return invoice;
}

module.exports = calculateTotalSpentByCategory;
