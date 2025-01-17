
//map

var numbers = [2, 3, 4, 5, 6];

var squareNumbers = numbers.map(function(x) {
    return x * x; 
});

console.log(squareNumbers);
console.log(numbers);


//filter


var numbers = [22,33,55,11,5,9,44];

var newNumbers = numbers.filter(function(x) {
    return x > 10; 
});

console.log(newNumbers);
