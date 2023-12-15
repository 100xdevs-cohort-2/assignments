const Product = require('../chatGpt/Product');
const Inventory = require('../chatGpt/Inventory');

test('Product and Inventory operations', () => {
  // Create products
  const laptop = new Product('Laptop', 1000, 5);
  const smartphone = new Product('Smartphone', 500, 10);

  // Create inventory
  const storeInventory = new Inventory();

  // Add products to inventory
  storeInventory.addProduct(laptop);
  storeInventory.addProduct(smartphone);

  // Test getProductByName
  expect(storeInventory.getProductByName('Laptop')).toEqual(laptop);

  // Test getTotalValue
  expect(storeInventory.getTotalValue()).toBe(10000); // (1000 * 5) + (500 * 10) = 10000

  // Test removeProduct
  storeInventory.removeProduct('Smartphone');
  expect(storeInventory.getTotalValue()).toBe(5000); // (1000 * 5) after removing Smartphone

  // Test setPrice and setQuantity
  laptop.setPrice(1200);
  laptop.setQuantity(3);
  expect(laptop.getPrice()).toBe(1200);
  expect(laptop.getQuantity()).toBe(3);

  // Test getTotalValue after updating price and quantity
  expect(storeInventory.getTotalValue()).toBe(3600); // (1200 * 3) after updating Laptop

  // Test removing a non-existent product
  expect(() => storeInventory.removeProduct('Tablet')).toThrowError('Product not found');

  // Test getting a non-existent product by name
  expect(storeInventory.getProductByName('Tablet')).toBeUndefined();
});
