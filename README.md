## Problem Statement

## Mock UX Design

[View the Mock UX flow design](https://github.com/divyashiva18/Mock-UI-flow-design)

This mock UX demonstrates the application's primary screens, navigation flow, and major user journeys.

## GitHub Pull Request

[Review the Mock UX submission pull request](https://github.com/divyashiva18/Mock-UI-flow-design/compare/main...feature/mock-ux-design?expand=1)

In this task, you will work with a piece of legacy code that simulates fetching data from a database. The current implementation is stuck in **"Callback Hell,"** where multiple asynchronous operations are nested inside each other, making the code difficult to read, debug, and maintain.

Your mission is to refactor this code into a clean, structured, and modern implementation using **`async/await`**. This will help you understand how to manage sequential asynchronous operations effectively in real-world backend systems.

---

## Files to Edit

You will only be working in the following file:

- `index.js`

**Do not modify any other files** (e.g., `api.js`, `spec/dummy.Spec.js`, `package.json`, etc.). The `api.js` file simulates a database and is used by the tests to provide data.

---

## Tasks

Your goal is to implement the `getCustomerData(customerId)` function in `index.js`. This function is currently empty.

1. **Declare an `async` Function:**

   - Ensure the `getCustomerData` function is declared with the `async` keyword.

2. **Implement Sequential Data Fetching:**

   - Inside the function, call and `await` the `fetchCustomer(customerId)` function to retrieve the customer's data.
   - Next, use the `id` from the returned customer object to call and `await` `fetchOrders(customerId)`.
   - Finally, if the orders array is not empty, get the `id` of the first order and call and `await` `fetchItems(orderId)`.

3. **Handle Edge Cases:**

   - If the `fetchOrders` function returns an empty array, your function should not attempt to fetch items. The `items` property in the final returned object should be an empty array.

4. **Implement Error Handling:**

   - Wrap your entire logic in a `try...catch` block.
   - If any of the `await`ed functions fail (reject a promise), your `catch` block should catch the error and then immediately `throw` it again. This ensures the test suite can detect proper error handling.

5. **Return the Final Object:**

   - If all steps are successful, return a single object with three keys: `customer`, `orders`, and `items`, containing the fetched data.

---

## Sample Final Output (for `customerId: 1`)

```json
{
  "customer": { "id": 1, "name": "Alex" },
  "orders": [ { "id": 201, "total": 500 }, { "id": 202, "total": 300 } ],
  "items": [ { "id": 3001, "name": "Laptop" } ]
}
```

---

## How to Test Your Solution

This project uses **Jasmine** as its testing framework. The tests verify whether your implementation behaves correctly.

**To run the tests:**

1. Open the terminal within the StackBlitz environment.
2. Run the following command:

   ```
   npm test
   ```

3. The terminal will install required packages and run the test suite located in `spec/dummy.Spec.js`.
4. Initially, you should see **5 failing tests**.
5. As you implement the solution in `index.js`, run `npm test` again to check progress.
6. Your task is complete when the output shows **`5 specs, 0 failures`**.

---

## Common Mistakes to Avoid

❌ **Forgetting the `async` keyword:** Without `async`, you cannot use `await`, and your code will not work as expected.

❌ **Forgetting the `await` keyword:** Calling functions like `fetchCustomer()` without `await` will return a Promise instead of actual data.

❌ **Skipping `try...catch`:** Missing error handling will cause tests related to failure scenarios to fail.

❌ **Swallowing Errors:** Always re-throw the error using `throw error;`. Logging alone is not enough.

❌ **Not handling empty orders:** Accessing `orders[0].id` without checking if the array is empty will cause runtime errors.

---

This task mirrors real-world backend workflows where multiple dependent asynchronous operations must be handled cleanly and safely. Mastering this pattern is essential for building scalable Node.js applications.
