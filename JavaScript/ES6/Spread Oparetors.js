const array1 = [0, 1, 2, 3, 4];
const array2 = [5, 6, 7, 8, 9];

const numbers = array1 + array2; // concat hoi 0,1,2,3,45,6,7,8,9
console.log(numbers);

console.log([array1, array2]);

// Spread Oparetors
console.log([...array1, ...array2]);

console.log(array1);
console.log(...array1);
console.log(...array2);

console.log(Math.max(...array1));
