/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let outputList = []
  let categoryTotal = {category: '', totalSpent: 0}
  let categories = []

  transactions.forEach((transaction,i) => {
    if (!categories.includes(transaction['category'])) {
      categories.push(transaction['category'])
    }
  })
  console.log(categories);
  categories.forEach((category) => {
    outputList.push({category:  category, totalSpent: 0})
  }
  )
  console.log(outputList);
  outputList.forEach((output,i) => {
    transactions.forEach((transaction,i) => {
      if(output['category'] === transaction['category']){
        output['totalSpent'] += transaction['price']
      }
    })
  })


  console.log("ooookkkkk: ",outputList);
  return outputList;
}

module.exports = calculateTotalSpentByCategory;
