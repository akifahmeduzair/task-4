// 1. Merge Two Unsorted Lists
function mergeLists(list1, list2) {
    const mergedList = [...list1, ...list2]; // Combining both lists
    return mergedList.sort((a, b) => a - b); // Sort using numeric comparison
  }

  

// 3. Remove Duplicates from an Array
function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1); // Remove the duplicate element at index j
            }
        }
    }
    return array;
}
  
// 4. Finding the Missing Number in an Integer Array (1 to 100)
function findMissingNumbers(array) {
    const missingNumbers = [];
    for (let i = 1; i <= 100; i++) {
        if (!array.includes(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}


  
// 5. Move Zeros to the End Using an Array
function moveZerosToEnd(array) {
    let zeroCount = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.splice(i, 1);
            zeroCount++;
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        array.push(0);
    }
}
  
// Example usage
const list1 = [3, 1, 4];
const list2 = [2, 0, 5];
const mergedList = mergeLists(list1, list2);
console.log(mergedList);
  
  
  
const array = [1, 2, 2, 3, 4];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);
  
const missingNumberArray = [1, 4, 7, 8, 9, 10];
const missingNums = findMissingNumbers(missingNumberArray);
console.log(missingNums); 

const numbers = [0, 1, 0, 3, 12];
moveZerosToEnd(numbers);
console.log(numbers);

//2. Copying text file to another text file
const {readFileSync, writeFileSync} = require('fs');
  
writeFileSync(
    './content/result.txt',
    `Here is the result after merging the lists: ${mergedList}\n` +
    `Here is the result after removing the duplicates from the list: ${uniqueArray}\n` +
    `Here is the result for the Missing Number between 1 to 100: ${missingNums}\n` +
    `Here is the result after Moving Zeros to the End of an Array: ${numbers}\n`,
    {flag: 'a'}
);

