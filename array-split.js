const friend = ["projjal", "ador", "shuvo", "sakib", "anindya", "mehedi", "nahid"];
const part = friend.slice(0, 3);
console.log(part);
const removed = friend.splice(2, 3, 13, 5, 97);
console.log(removed);
const together = friend.join("+");
console.log(together);
