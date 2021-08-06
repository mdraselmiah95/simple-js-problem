
// first approach

// var first = 5;
// var second = 7;
// console.log(first, second);
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// second approach destructing

var first = 5;
var second = 7;
[first, second] = [second, first];
console.log(first, second);