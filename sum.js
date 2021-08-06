const numbers = [12, 34, 45, 64, 75, 53, 5, 97, 100];
//    let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);


function totalNumberSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

// const numberSum = totalNumberSum((numbers));

const numbs = [12, 34, 6, 43, 9];

const numberSum = totalNumberSum((numbs));
console.log(numberSum);