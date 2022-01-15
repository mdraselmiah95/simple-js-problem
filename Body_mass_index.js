//calculate BMI

const massAsif = 78;
const hightAsif = 1.69;
const massShakib = 92;
const hightShakib = 1.95;

const BMIAsif = massAsif / hightAsif ** 2;
// const BMIShakib = massShakib / hightShakib ** 2;
const BMIShakib = massShakib / (hightShakib * hightShakib);
const asifHigherBMI = BMIAsif > BMIShakib;

console.log(BMIAsif, BMIShakib, asifHigherBMI);
