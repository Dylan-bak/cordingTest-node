if (import.meta.url === new URL(import.meta.url).href) {
  const numbers = [24, 36, 48];
  console.log(`최대 공약수: ${findGcd(numbers)}`);
  console.log(`최소 공배수: ${findLcm(numbers)}`);
}

/** 최대 공약수를 - 인자가 변수 2개만 있음 */
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
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
