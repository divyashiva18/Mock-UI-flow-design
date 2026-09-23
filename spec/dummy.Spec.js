const getCustomerData = require('../index');

describe('Asynchronous Data Fetching - Customer Flow', () => {
  it('should fetch and combine data for a customer with orders and items', async () => {
    const data = await getCustomerData(1);
    expect(data).toEqual({
      customer: { id: 1, name: 'Alex' },
      orders: [
        { id: 201, total: 500 },
        { id: 202, total: 300 },
      ],
      items: [{ id: 3001, name: 'Laptop' }],
    });
  });

  it('should handle a customer with no orders', async () => {
    const data = await getCustomerData(2);
    expect(data).toEqual({
      customer: { id: 2, name: 'Jordan' },
      orders: [],
      items: [],
    });
  });

  it('should throw an error if the customer is not found', async () => {
    await expectAsync(getCustomerData(999)).toBeRejectedWith(
      new Error('Customer not found')
    );
  });

  it('should be an async function', () => {
    const isAsync = getCustomerData.constructor.name === 'AsyncFunction';
    expect(isAsync).toBe(
      true,
      "The 'getCustomerData' function must be declared with the 'async' keyword."
    );
  });

  it('should use await and not use .then() or .catch()', () => {
    const functionAsString = getCustomerData.toString();
    const usesAwait = functionAsString.includes('await');
    const usesThen = functionAsString.includes('.then');
    const usesCatch = functionAsString.includes('.catch(');

    expect(usesAwait).toBe(
      true,
      "The implementation must use the 'await' keyword."
    );
    expect(usesThen).toBe(false, "The implementation must not use '.then()'.");
    expect(usesCatch).toBe(
      false,
      "The implementation must not use the Promise '.catch()' method."
    );
  });
});
