
//  -- Print odd numbers in an array --

const printOddNumbers = arr => arr.forEach(num => num % 2 !== 0 ? console.log(num) : null);

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbers(numbers1);

//   -- Convert all the strings to title caps in a string array --

const convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

const strings = ["hello", "world", "javascript"];
const titleCapsStrings = convertToTitleCaps(strings);
console.log(titleCapsStrings);

//   -- Sum of all numbers in an array --

const sumOfNumbers = arr => arr.reduce((acc, num) => acc + num, 0);

const numbers2 = [1, 2, 3, 4, 5];
const sum = sumOfNumbers(numbers2);
console.log(sum);

//  -- Return all the prime numbers in an array --

const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

const getPrimeNumbers = arr => arr.filter(num => isPrime(num));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);


//   -- Return all the palindromes in an array --

const isPalindrome = str => str === str.split('').reverse().join('');

const getPalindromes = arr => arr.filter(word => isPalindrome(word));

const words = ["level", "hello", "racecar", "world"];
const palindromes = getPalindromes(words);
console.log(palindromes);

//   -- 
