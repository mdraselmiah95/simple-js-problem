function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}


const agesOne = [23, 44, 53, 13, 98, 35, 77];
const agesTwo = [-22, -3, -54, -11, -7, -8];
const oldestTwo = largestElement(agesTwo);
const oldestOne = largestElement(agesOne);
console.log(oldestOne);
console.log(oldestTwo);

function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const lowest = [23, 66, 11, 98, 265, 7, 88];
const lowestNumber = lowestElement(lowest);
console.log('The lowest number is :', lowestNumber);


// find the longest name

// function findLongestWord(str) {
//     let array = str.match;
//     let result = array[0];
//     for (let i = 1; i < str.length; i++){
//         if (result.length < array[i].length) {
//             result = array[i];
//         }
//     }
//     return result;
// }

// var names = ['This', 'mango', 'a', 'example', 'of', 'finding', 'longest', 'word'];
// var longestWord = findLongestWord(names);
// console.log(longestWord);
