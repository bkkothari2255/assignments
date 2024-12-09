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
  var categorySet = new Set();
  var categoryWiseSpentArray = [];
  // find category -> find total spend 
  for(let i in transactions){
    categorySet.add(transactions[i].category);
  }

  for(let category of categorySet.keys()){
    var totalSpent = 0;
    for(let item in transactions){
      const transaction = transactions[item];
        if(category===transaction.category){
          totalSpent += transaction.price;
        }
    }
    categoryWiseSpentArray.push({"category": category, "totalSpent": totalSpent});
  }
  return categoryWiseSpentArray;
}

module.exports = calculateTotalSpentByCategory;
