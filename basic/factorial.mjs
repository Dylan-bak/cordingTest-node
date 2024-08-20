export function findFactorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) result *= i;
  return result;
}

export function findFactorialBigInt(n) {
  let result = 1;
  for (let i = n; i > 0; i--) result *= i;
  return BigInt(result);
}

import * as factorial from "./factorial.mjs";
export default { factorial };
