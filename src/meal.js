function nameMenuItem(name) {
  return `Delicious ${name}`;
}


function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  };
  return menuItem;
};

// note to sell: ingredientsList is an array
function addIngredients(newIngredient, ingredientsList) {
  for (var i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i] === newIngredient) {
      return;
    }
  }
  ingredientsList.push(newIngredient);
};


function formatPrice(unformattedPrice) {
  return `$${unformattedPrice}`;
};


function decreasePrice(fullPriceItem){
  return fullPriceItem * .9;
};


function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
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
