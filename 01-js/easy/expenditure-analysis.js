/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// Sample transactions
const transactions = [
  {
    itemName: "Item 1",
    category: "Groceries",
    price: 50.0,
    timestamp: "2023-11-04",
  },
  {
    itemName: "Item 2",
    category: "Entertainment",
    price: 25.0,
    timestamp: "2023-11-04",
  },
  {
    itemName: "Item 3",
    category: "Groceries",
    price: 30.0,
    timestamp: "2023-11-05",
  },
  {
    itemName: "Item 4",
    category: "Bills",
    price: 100.0,
    timestamp: "2023-11-05",
  },
  {
    itemName: "Item 5",
    category: "Entertainment",
    price: 15.0,
    timestamp: "2023-11-06",
  },
];

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    // condition: check whether it doesn't exist in categoryTotals
    if (!categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] = price;
    } else {
      // if it's already exist
      categoryTotals[category] += price;
    }
  }

  // now, convert categoryTotals Object in individual Category Object in an Array
  const finalList = Object.keys(categoryTotals).map((category) => {
    return { category: category, totalSpent: categoryTotals[category] };
  });

  return finalList;
}

let finalList = calculateTotalSpentByCategory(transactions);
console.log(finalList);

module.exports = calculateTotalSpentByCategory;
