const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = [];
let even = [];

array.forEach(x => {
    if (x % 2 == 0) {
        even.push(x)
    }
    else {
        odd.push(x)
    }
})

console.log(even);
console.log(odd);
