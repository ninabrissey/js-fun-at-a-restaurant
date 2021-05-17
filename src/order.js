function takeOrder(newOrder, deliveryOrderList) {
  if (deliveryOrderList.length < 3) {
    deliveryOrderList.push(newOrder);
  }
};

function refundOrder(orderNumberToRefund, deliveryOrderList) {
  for (var i = 0; i < deliveryOrderList.length; i++) {
    if (orderNumberToRefund === deliveryOrderList[i].orderNumber) {
      deliveryOrderList.splice([i]w, 1);
    }
  }
};

function listItems(deliveryOrders) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(', ');
};

function searchOrder(deliveryOrders, itemCheck) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemCheck) {
      return true;
    }
  }
  return false;
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
