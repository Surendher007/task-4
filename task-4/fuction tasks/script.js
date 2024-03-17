// Print odd numbers in an array
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Convert all the strings to title caps in a string array
(function(arr) {
    var titleCapsArray = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCapsArray);
})(["hello", "world", "javascript"]);

// Sum of all numbers in an array
(function(arr) {
    var sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// Return all the prime numbers in an array
(function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    var primeNumbers = arr.filter(function(num) {
        return isPrime(num);
    });
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Return all the palindromes in an array
(function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    var palindromes = arr.filter(function(str) {
        return isPalindrome(str);
    });
    console.log(palindromes);
})(["level", "hello", "racecar", "world"]);

// Return median of two sorted arrays of the same size
(function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    var length = mergedArray.length;
    var median;
    if (length % 2 === 0) {
        median = (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } else {
        median = mergedArray[Math.floor(length / 2)];
    }
    console.log(median);
})([1, 2, 3], [4, 5, 6]);

// Remove duplicates from an array
(function(arr) {
    var uniqueArray = arr.filter(function(item, index, self) {
        return self.indexOf(item) === index;
    });
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);

// Rotate an array by k times
(function(arr, k) {
    var rotatedArray = arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);
