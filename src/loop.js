// let x = 0;
// while (x < 10) {
//   console.log(`xの値は${x}です`);
//   x++;
// }
// console.log(x);
//for
let total = 0;
for (let i = 0; i < 10; i++) {
  total += i + 1;
}
// console.log(total);

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
// console.log(sum([1, 2, 3, 4, 5]));
//forEach
// const array = [1, 2, 3];
// array.forEach((currentValue) => {
//   console.log(currentValue); //1 2 3
// });
function sum2(array) {
  let total1 = 0;
  array.forEach((sumvalue) => {
    total1 += sumvalue;
  });
  return total1;
}
// console.log(sum2([1, 2, 3, 4, 5]));

function isEvent(num) {
  return num % 2 === 0;
}
function isEventIncluded(number) {
  let isEventInckuded = false;
  for (let i = 0; i < number.length; i++) {
    let num = number[i];
    if (isEvent(num)) {
      isEventInckuded = true;
    }
  }
  return isEventInckuded;
}
let array5 = [1, 5, 10, 15, 21];
// console.log(isEventIncluded(array5));

//someメソッド
const isPassed = array5.some((currentValue) => {
  return currentValue % 2 === 0;
});
console.log(isPassed);
