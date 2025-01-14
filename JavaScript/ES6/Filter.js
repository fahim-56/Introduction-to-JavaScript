const array = [
    { id: 1, Name: "Fahim", Dept: "CSE" },
    { id: 2, Name: "Kawshik", Dept: "BBA" },
    { id: 3, Name: "Tonmoy", Dept: "CSE" },
    { id: 4, Name: "Mushfiq", Dept: "CSE" },
]

// for (let i = 0; i < array.length; i++) {
//     if (array[i].Dept == "CSE") {
//         console.log(array[i]);
//     }
// }

const result = array.filter(obj => obj.Dept == "CSE");
console.log(result);
// If filter element is missing return []

const arr = [1, 2, 3, 4];
const x = arr.filter(a => a == 3);
console.log(x);