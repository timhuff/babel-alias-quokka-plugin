import result from "test/target";
import expected from "./target";

/* To run the test, open this file in ​​​​Quokka */

if (result !== expected)
  throw new Error(`Test failed. Expected: ${expected} Received: ${result}`);

console.log(`Test passed. Result: ${result}`);
