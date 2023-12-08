function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  const li = new Map();
  for (const trans in transactions) {
    const { category, price } = transactions[trans];
    if (li.has(category)) {
      li.set(category, li.get(category) + price);
    } else {
      li.set(category, price);
    }
  }
  li.forEach((value, key) => {
    arr.push({ "category": key, "totalSpent": value });
  });
  return arr;
}

module.exports = calculateTotalSpentByCategory;
