/** 최대 공약수를 - 인자가 변수 2개만 있음 */
export function gcd_with_logic(a, b) {
  while (b !== 0) {
    a = b;
    b = rest;
    rest = a % b;
  }
  return a;
}
export function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

/** 최대 공약수 */
export function findGcd(arr) {
  return arr.reduce((acc, cur) => gcd(acc, cur));
}

/** 최소 공배수 */
export function findLcm(arr) {
  /** 두 수의 최소 공배수를 리턴 */
  const lcm = (a, b) => (a * b) / gcd(a, b);
  /** 배열의 최소 공배수를 리턴 */
  return arr.reduce((acc, cur) => lcm(acc, cur));
}

import * as util from "./util.mjs";
export default { util };
