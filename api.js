const FAKE_DB = {
  customers: {
    1: { id: 1, name: 'Alex' },
    2: { id: 2, name: 'Jordan' },
  },
  orders: {
    1: [
      { id: 201, total: 500 },
      { id: 202, total: 300 },
    ],
    2: [], // Jordan has no orders
  },
  items: {
    201: [{ id: 3001, name: 'Laptop' }],
    202: [],
  },
};

const fetchCustomer = (customerId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (FAKE_DB.customers[customerId]) {
        resolve(FAKE_DB.customers[customerId]);
      } else {
        reject(new Error('Customer not found'));
      }
    }, 20);
  });
};

const fetchOrders = (customerId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof FAKE_DB.orders[customerId] !== 'undefined') {
        resolve(FAKE_DB.orders[customerId]);
      } else {
        reject(new Error('Orders not found for customer'));
      }
    }, 20);
  });
};

const fetchItems = (orderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (FAKE_DB.items[orderId]) {
        resolve(FAKE_DB.items[orderId]);
      } else {
        reject(new Error('Items not found for order'));
      }
    }, 20);
  });
};

module.exports = {
  fetchCustomer,
  fetchOrders,
  fetchItems,
};
