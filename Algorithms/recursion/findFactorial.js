//with loop
// function factorial(number) {
//   let result = 1;

//   for (let i = 2; i <= number; i++) {
//     // result *= i;
//     result *= i;
//   }
//   console.log(result);
// }

//recursive version
function factorial(x) {
  if (x === 0) return 1;
  else return x * factorial(x - 1);
}

console.log(factorial(4));
