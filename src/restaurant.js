function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
    breakfast: [],
    lunch: [],
    dinner: [],
    }
  };
  return restaurant;
};

// restaurant.menus.breakfast.includes(menuItem) === false is the equivalent of
// !restaurant.menus.breakfast.includes(menuItem)
function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(menuItem)) {
  restaurant.menus.breakfast.push(menuItem);
} else if (menuItem.type === 'lunch' && !restaurant.menus.lunch.includes(menuItem)) {
  restaurant.menus.lunch.push(menuItem);
} else if (menuItem.type === 'dinner' && !restaurant.menus.dinner.includes(menuItem)) {
  restaurant.menus.dinner.push(menuItem);
  };
  return restaurant;
};


function removeMenuItem(restaurant, item, type) {
    for (var i = 0; i < restaurant.menus[type].length; i++) {
      restaurant.menus[type].splice(i, 1)
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
    };
    return `Sorry, we don't sell ${item}, try adding a new recipe!`;
};



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
