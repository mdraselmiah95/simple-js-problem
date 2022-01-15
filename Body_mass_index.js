//calculate BMI

const massAsif = 77;
const hightAsif = 1.67;
const massShakib = 80;
const hightShakib = 1.7;

const BMIAsif = massAsif / hightAsif ** 2;
// const BMIShakib = massShakib / hightShakib ** 2;
const BMIShakib = massShakib / (hightShakib * hightShakib);

console.log(BMIAsif, BMIShakib);
