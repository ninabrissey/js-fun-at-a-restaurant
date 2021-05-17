class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  };

  createRestaurant(restaurantName) {
    return restaurantName;
  };

  greetCustomer(customer, isMorning) {
    if(customer !== undefined && isMorning) {
      return `Good morning, ${customer}!`;
    } else {
    return `Hello, ${customer}!`;
    };
  };
  //
  // addMenuItem(){
  //
  // };
  //
  // checkForFood() {
  //
  // };

};

module.exports = Chef;*
