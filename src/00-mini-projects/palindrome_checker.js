// palindrome checker

function isPalindrome(str) {
  // base cases
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  // recursive call
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("pizza")); // false
