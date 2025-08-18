// Problem 1: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Problem 1:", reverseString("hello")); // "olleh"

// Problem 2: Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("Problem 2:", countVowels("programming")); // 3

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("Problem 3:", isPalindrome("madam")); // true
console.log("Problem 3:", isPalindrome("hello")); // false

// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log("Problem 4:", findMax([5, 1, 9, 3])); // 9

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}
console.log("Problem 5:", removeDuplicates([1, 2, 2, 3, 4, 4])); // [1,2,3,4]

// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log("Problem 6:", sumArray([1, 2, 3, 4])); // 10

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log("Problem 7:", findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log("Problem 8:", capitalizeWords("hello world")); // "Hello World"

// Problem 9: Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Problem 9:", factorial(5)); // 120

// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
console.log("Problem 10:");
pingPong();