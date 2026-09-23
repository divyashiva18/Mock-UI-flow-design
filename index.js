const { fetchCustomer, fetchOrders, fetchItems } = require('./api');

/**
 * TODO:
 * - Implement the `getCustomerData` function using async/await.
 * - It should fetch customer, then orders, then items.
 * - It should return an object with customer, orders, and items.
 * - It should handle errors using a try/catch block and re-throw the error.
 * - It should handle the case where a customer has no orders.
 */
async function getCustomerData(customerId) {
  // Your implementation here.
  // The tests will fail until you write the correct logic.
  // You will need to add the 'async' keyword to this function.
  try{
    const customer = await fetchCustomer(customerId);
    const orders = await fetchOrders(customer.id);
    let items = [];
    if(orders.length> 0){
      const firstOrderId = orders[0].id;
      items = await fetchItems(firstOrderId);
    }


     return {
      customer,
      orders,
      items,
    };
}catch (error){
 throw error;
}
}
module.exports = getCustomerData;
