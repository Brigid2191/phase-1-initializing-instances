// index.js

// Class for Breakfast
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Class for Lunch
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Class for Dinner (with private property #dessert)
  class Dinner {
    #dessert; // Declare private property
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  
    // Optional: Getter method to access the private dessert property
    getDessert() {
      return this.#dessert;
    }
  }
  
  // Creating instances for testing
  const breakfast1 = new Breakfast("Pancakes", "Coffee");
  console.log(breakfast1); // Breakfast { food: 'Pancakes', drink: 'Coffee' }
  
  const lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Lemonade");
  console.log(lunch1); // Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Lemonade' }
  
  const dinner1 = new Dinner("Greek Salad", "Mushroom Soup", "Steak", "Chocolate Cake");
  console.log(dinner1); // Dinner { salad: 'Greek Salad', soup: 'Mushroom Soup', entree: 'Steak' }
  console.log(dinner1.getDessert()); // Chocolate Cake
  
  // Export classes for testing
  module.exports = { Breakfast, Lunch, Dinner };
  