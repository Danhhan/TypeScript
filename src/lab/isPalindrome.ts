/**
 * @param x: number
 *
 * @return boolean
 */
 function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  var number = x.toString();
  const digits = number.split('');
  const result: string[] = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    const element = digits[i];
    result.push(element);
  }
  const newX = Number(result.join(''));
  if (newX == x) {
    return true;
  }
  return false;
}
const result: boolean = isPalindrome(10);
console.log(result);
