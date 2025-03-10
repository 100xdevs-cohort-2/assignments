/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // so now it should return the array of object which have two parameter category and  price in it 
  const ansFinal = [];
  for(var i = 0; i < transactions.length; i++){
    const catergoryName = transactions[i].category;
    // so now here we have to check if the catergory is already availabe in it  
    const val = IscategoryPresent(ansFinal , catergoryName);
    // so now if the val is -1 then we have to add the new catergory here 
    if(val == -1){
      ansFinal.push({category : catergoryName ,
        totalSpent : transactions[i].price
      })
    }else{
      // so now here we have to add the value only here 
      const currval = parseInt(transactions[i].price);
      const prevval = parseInt(ansFinal[val].totalSpent);
      ansFinal[val].totalSpent = currval+prevval
    }
  }

  // so now return the ansfinal here 
  return ansFinal
}
function IscategoryPresent(array , catergory){
  for(let i = 0; i < array.length; i++){
    if(array[i].category === catergory){
      return i;
    }
  }
  return -1;
}

module.exports = calculateTotalSpentByCategory;
