/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length === 0) {
    return [];
  }

  const expenditure = transactions.reduce((acc, curr) => {
    const existingCategory = acc.find(
      (item) => item.category === curr.category
    );

    if (existingCategory) {
      existingCategory.totalSpent += curr.price;
    } else {
      acc.push({ category: curr.category, totalSpent: curr.price });
    }
    return acc;
  }, []);

  console.log(expenditure);
  return expenditure;
}

module.exports = calculateTotalSpentByCategory;
