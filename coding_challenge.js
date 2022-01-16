//coding challenge

// const massMark = 95;
// const hightMark = 1.88;
// const massJohn = 85;
// const hightJohn = 1.76;

const massMark = 78;
const hightMark = 1.69;
const massJohn = 92;
const hightJohn = 1.95;

const BMIMark = massMark / hightMark ** 2;
const BMIJohn = massJohn / (hightJohn * hightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
