function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(menuItemName) {
  var menuItem = {
    name: menuItemName,
    price: 10.99,
    type: 'breakfast'
  };
  return menuItem;
};

//alt

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  };
  return menuItem;
};



function addIngredients(newIngredient, ingredientsArray) {
  for (var i = 0; i < ingredientsArray.length; i++) {
    if (ingredientsArray[i] === newIngredient) {
      return;
    }
  }
  ingredientsArray.push(newIngredient);
};


function formatPrice(unformattedPrice) {
  return `$${unformattedPrice}`;
};

function decreasePrice(fullPriceItem){
  return fullPriceItem * .9;
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe;
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
