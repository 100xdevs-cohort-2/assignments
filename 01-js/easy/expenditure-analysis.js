/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const newArray = transactions.reduce((acc, transaction) =>{
    const isPresent = IsPresent(acc, transaction.category)
    if(isPresent){
      isPresent.totalSpent += transaction.price
    }
    else{
      acc.push({
        category: transaction.category,
        totalSpent: transaction.price
      })
    }

    return acc
  }, [])

  return newArray
}

function IsPresent(arr, category){

  for(let i = 0; i < arr.length; i++){
      if(arr[i].category === category){
          return arr[i]
      }
  }

  return null
}

module.exports = calculateTotalSpentByCategory;
