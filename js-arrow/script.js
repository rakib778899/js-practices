

//traditional without parameter
function message1(){
    return "hi ";
}

//arrow without parameter
const message2 = () => "hello";

console.log(message1());
console.log(message2());

//traditional  parameter
function add1(num1,num2){
    return num1+num2;
}



//arrow  parameter
const add2 = (num1,num2) => num1+num2;

console.log(add1(10,20));
console.log(add2(40,20));





//arrow  parameter
var students = [
    {
        id : 101,
        name : 'rakib',
        cgpa : 3.89
    },
    {
        id : 102,
        name : 'akash',
        cgpa : 3.89
    },
    {
        id : 103,
        name : 'rohasn',
        cgpa : 1.89
    },
    {
        id : 104,
        name : 'ridi',
        cgpa : 2.56
    },

]
const studentNums1 = () => students.filter((x) => x.cgpa > 3).map((y) => y.name);

console.log(studentNums1());