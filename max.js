// compare 3

/* const business = 50;
const minister = 70;
const army = 580; */

/* 
if (business > minister) {               //MultiLine alt + shift + A
    console.log('Business is Bigger');
}
else {
    console.log('Minister is bigger.')
} */

/* if (business > minister && business > army) {
    console.log('Business is Bigger.')
}
else if (minister > business && minister > army) {
    console.log('Minister is Bigger.')
}
else {
    console.log('Army is Bigger.')
} */

/* var numOne = 440;
var numTwo = 340;
var numThree = 450;
var numFour = 740;
var numFive = 240;

var maxNumber = Math.max(numOne, numTwo, numThree, numFour, numFive);
console.log('The Largest number is :', maxNumber);
 */

/* 
function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const larger = findLargest(13, 6);
console.log('The Largest is :',larger); */


// Task 1:  create a function that takes three numbers as input parameter and returns you the largest number of the three.

function outputTheMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

var theMax = outputTheMax(567, 99, 117);
console.log('The Biggest number is:', theMax);


// Task 2: create a function that takes three numbers as input parameter and returns you the smallest number of the three.

function outputTheMin(number1, number2, number3) {
    if (number1 < number2 && number1 < number3) {
        return number1;
    }
    else if (number2 < number1 && number2 < number3) {
        return number2;
    }
    else {
        return number3;
    }
}

var minNumber = outputTheMin(1442, 116542,1449);
console.log('The smallest number:',minNumber);