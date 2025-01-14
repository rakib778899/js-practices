let students = {
    id : 101,
    name : 'rakib' ,
    age : 23
}

for (let x in students){
    document.write(`${x} : ${students[x]}`)
}

var num = [10, 20, 30, 40];

var squareNum = [];

num.forEach(function(x){
    squareNum.push(x * x);  // সঠিকভাবে বর্গ করা হয়েছে
})

document.write(squareNum);
