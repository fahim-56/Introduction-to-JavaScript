const arr = [1, 2, 3, 4, 5];
const x = arr.map(b => b * 2)// can do operation with element
const y = arr.map(r => r == 3)
console.log(x);
console.log(y);

const array = [
    { id: 1, Name: "Fahim", Dept: "CSE" },
    { id: 2, Name: "Kawshik", Dept: "BBA" },
    { id: 3, Name: "Tonmoy", Dept: "CSE" },
    { id: 4, Name: "Mushfiq", Dept: "CSE" },
]
const result = array.map(a => a.Dept == "CSE")
const res = array.map(a => a.id * 2)
console.log(result);
console.log(res);
