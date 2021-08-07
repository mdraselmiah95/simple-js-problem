/* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,


rd = 2nd + 1st;
4th = 3rd + 2nd;
5th = 4th + 3rd;
6th = 5th + 4th;
7th = 6th + 5th;
16th = 15th + 14th;
144th = 143th + 142th; 
nth = (n-1)th + (n-2)th;
ith = (i-1)th + (i-2)th;

*/

/* const fibo = [0, 1];
for (let i = 2; i <= 14; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

/* function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(11);
console.log(fiboSeries); */

function fibonacciSeries(num) {
    // console.log(typeof num);
    if (typeof num != 'number') {
        return 'Please give a valid number.';
    } else if (num < 2) {
        return 'please enter a positive number.';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(-33);
console.log(fiboSeries);