function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  const banWord = ["spam", "sale"];
  for (const word of banWord) {
    if (normalizedMessage.includes(word)) {
      return true; // Spam detected
    }
  }
  return false; // No spam
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Інший варіант вирішення цієї задачі

// function checkForSpam(message) {
//   const normalizedMessage = message.toLowerCase();
//   const banWord =
//     normalizedMessage.includes("spam") || normalizedMessage.includes("sale");

//   if (banWord) {
//     return true; // Spam detected
//   } else {
//     return false; // No spam
//   }
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
