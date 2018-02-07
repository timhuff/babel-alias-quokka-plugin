const result = require("test/target");
const expected = require("./target");

if (result !== expected)
  throw new Error(`Test failed. Expected: ${expected} Received: ${result}`);

console.log(`Test passed. Result: ${result}`);
