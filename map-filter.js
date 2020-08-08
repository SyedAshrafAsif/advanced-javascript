const number = [2, 3, 5, 6, 8, 11, 13];
// const output =[];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     result = element * element;
//     output.push(result);
// }
// console.log(output);
// //or
// number.map(function square(element, index, array){
//     console.log(element, index, array);
// })
// //or
// const result = number.map(function square(element){
//     return element * element;
// })
// //or
// const result = number.map(square = element => element * element);
// //or
const result = number.map(x => x * x);
const bigger = number.filter(x => x < 6);
const isThere = number.find(x => x > 6);
const eachElement = number.forEach(x => console.log(x));
console.log(eachElement);