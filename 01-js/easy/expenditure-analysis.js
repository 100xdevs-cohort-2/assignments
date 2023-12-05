function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};

    // Calculate total spent for each category
    transactions.forEach(transaction => {
        const { category, price } = transaction;
        categoryTotals[category] = (categoryTotals[category] || 0) + price;
    });

    // Convert category totals to the desired output format
    const result = Object.keys(categoryTotals).map(category => ({
        [category]: categoryTotals[category]
    }));

    return result;
}

// Example usage:
const transactions = [
    { itemName: 'Item1', category: 'Food', price: 20, timestamp: '2023-01-01' },
    { itemName: 'Item2', category: 'Clothing', price: 50, timestamp: '2023-01-02' },
    { itemName: 'Item3', category: 'Food', price: 30, timestamp: '2023-01-03' },
    { itemName: 'Item4', category: 'Electronics', price: 100, timestamp: '2023-01-04' },
    { itemName: 'Item5', category: 'Clothing', price: 40, timestamp: '2023-01-05' },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
