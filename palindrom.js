const array = ["121", "Ana", "Qardaş"];

const isPalindrome = str => {
  const lower = str.toLowerCase();
  return lower === lower.split('').reverse().join('');
};

const palindromes = array.filter(isPalindrome);

console.log(palindromes);