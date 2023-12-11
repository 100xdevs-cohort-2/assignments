/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

export function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((acc, transaction) => {
    const { category, price } = transaction;
    const existingCategory = acc.find((item) => item.category === category)
    if (existingCategory) {
      existingCategory.totalSpent += price
    } else {
      acc.push({category, totalSpent: price})
    }
    return acc;
  }, []);
}

