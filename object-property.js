const student = [{id: 10, name: "linus"}, {id: 14, name: "max"}, {id: 16, name: "oswald"}, {id: 19, name: "dave"}];
// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const result = element.name;
//     output.push(result);
   
// }
// console.log(output);

const result = student.map(s => s.name);
const bigger = student.filter(s => s.id > 15);
const instantBigger = student.find(s => s.id> 15);
console.log(instantBigger);