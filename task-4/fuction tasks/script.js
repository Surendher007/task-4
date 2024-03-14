
//Print odd numbers in an array: 

const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers([1, 2, 3, 4, 5]); 


// -- Convert all the strings to title caps in a string array --

const convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
console.log(convertToTitleCaps(["hello", "world"])); 

//  -- Sum of all numbers in an array --

const sumOfArray = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};
console.log(sumOfArray([1, 2, 3, 4, 5])); 

//  -- Return all the prime numbers in an array --

const getPrimes = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7])); 

// -- Return all the palindromes in an array --

const getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
    });
};
console.log(getPalindromes(["madam", "hello", "level"])); 

// -- Return median of two sorted arrays of the same size --

const medianOfArrays = function(arr1, arr2) {
    const mergedArr = arr1.concat(arr2);
    const sortedArr = mergedArr.sort((a, b) => a - b);
    const length = sortedArr.length;
    const middleIndex = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
        return sortedArr[middleIndex];
    }
};
console.log(medianOfArrays([1, 3, 5], [2, 4, 6])); 

// -- Remove duplicates from an array --

const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// -- Rotate an array by k times --

const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

 


