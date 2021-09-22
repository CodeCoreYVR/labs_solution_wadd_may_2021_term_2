// Validating that all my inputs are numbers
const validateInputs = (rejectFunction, ...inputs) => {
  if (inputs.some((input) => isNaN(input))) {
    rejectFunction(inputs.find((i) => isNaN(i)) + " is not a valid number'");
  }
};

const add = (...numbers) =>
  new Promise((resolve, reject) => {
    validateInputs(reject, ...numbers);
    setTimeout(() => {
      resolve(numbers.reduce((prev, cur) => prev + cur, 0));
    }, 10);
  });

const mult = (...nums) =>
  new Promise((resolve, reject) => {
    validateInputs(reject, ...nums);
    setTimeout(() => {
      resolve(
        nums.reduce((prev, cur, index) => {
          if (index === 0) return prev;
          else return prev * cur;
        }, nums[0])
      );
    }, 10);
  });

const div = (...nums) =>
  new Promise((resolve, reject) => {
    validateInputs(reject, ...nums);
    setTimeout(() => {
      resolve(
        nums.reduce((prev, cur, index) => {
          if (index == 0) return prev;
          else return prev / cur;
        }, nums[0])
      );
    }, 10);
  });

const sub = (...nums) =>
  new Promise((resolve, reject) => {
    validateInputs(reject, ...nums);
    setTimeout(() => {
      resolve(
        nums.reduce((prev, cur, index) => {
          if (index == 0) return prev;
          else return prev - cur;
        }, nums[0])
      );
    }, 10);
  });

const pow = (...nums) =>
  new Promise((resolve, reject) => {
    validateInputs(reject, ...nums);
    setTimeout(() => {
      resolve(
        nums.reduce((prev, cur, index) => {
          if (index == 0) return prev;
          else return Math.pow(prev, cur);
        }, nums[0])
      );
    }, 10);
  });

add(9)
  .then((r) => add(9, r))
  .then((r) => add(r, 2))
  .then((r) => mult(5, r))
  .then((r) => div(r, 10))
  .then(console.log)
  .catch(console.error);

pow(2)
  .then((r) => pow(2, r)) // r is 2
  .then((r) => pow(2, r)) // r is 4
  .then((r) => mult("fitty-two", r)) // r is 16, but the mult('fitty-two', ...)
  // should reject
  .then(console.log) // never makes it here
  .catch(console.error); // error logs 'fitty-two is not a valid number'
