const number = [4, 2, 5, 8, 1, 7, 9, 3, 6];
for (let i = 0; i < number.length; i++) {
    if(number[i] > 7){
        break;
    }
    //console.log(number[i]);
}

const number2 = [4, -2, 5, -8, 1, 7, 9, -3, 6];
for (let i = 0; i < number2.length; i++) {
    if(number2[i] < 0){
        continue;
    }
    console.log(number2[i]);
}
