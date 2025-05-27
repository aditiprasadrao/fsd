let message = "Welcome to JavaScript Class";

// Find length of the message
let length = message.length;
console.log("Length of the message: " + length);

// Find the position of "JavaScript"
let position = message.indexOf("JavaScript");
console.log("Position of 'JavaScript': " + position);

// Extract the word "JavaScript" from the message
let extracted = message.substring(position, position + "JavaScript".length);
console.log("Extracted word: " + extracted);

// Replace "Class" with "Lab"
let updatedMessage = message.replace("Class", "Lab");
console.log("After replacing the word: " + updatedMessage);

// Function to check if a word is a palindrome
function isPalindrome(word) {
  let reversed = word.split('').reverse().join('');
  return reversed === word;
}

// Test words
let word1 = "madam";
let word2 = "hello";

console.log(word1 + " is palindrome? " + isPalindrome(word1));
console.log(word2 + " is palindrome? " + isPalindrome(word2));

