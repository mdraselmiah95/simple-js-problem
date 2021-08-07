// Math.floor
// Math.ceil
// Math.round

/* const randomNumber = Math.random();
const betweenTen = randomNumber * 10;
const roundedNumber = Math.round(betweenTen);
console.log(roundedNumber); */


const selected = [];
for (let i = 0; i < 6; i++){
    const randomNumber = Math.random() * 100;
    const roundedNumber = Math.round(randomNumber);
    if (selected.indexOf(roundedNumber) == -1) {
        selected.push(roundedNumber);
    } else {
        console.log('Found Duplicated number:',selected, roundedNumber);
    }
}
console.log(selected);
   
// generate a random number between 1 to 10

/* var ranNum = Math.round(Math.random() * 10);
console.log(ranNum);

const number = -78;
const answer = Math.abs(number);
console.log(answer); */

var a = 2;
var b = 3;
if (a < b) {
    console.log("hello");
} else {
    console.log("no.")
}