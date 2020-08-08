const first = 1;
const second = true ;
if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
/* '==' is not type sensitive. if first = 4 and second = "4" / first = 1 and second = true / first = 0 and second = false;
the condition will be true.
'===' is type sensitive. it checks both the value and the data type of the variables.
if first = 4 and second = "4" / first = 1 and second = true / first = 0 and second = false;
the condition will be false because the the data types are not same. */
