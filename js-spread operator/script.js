function addNum(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
let numbers1 = [...numbers, 5, 6];
console.log(numbers1);  

let p1 = {
    name: "rakib",
    age: 23
};

let p2 = {
    class: 12,
    roll: 20
};

let p = { ...p1, ...p2 };
console.log(p);  
