const array = [
    { id: 1, Name: "Fahim", Dept: "CSE" },
    { id: 2, Name: "Kawshik", Dept: "BBA" },
    { id: 3, Name: "Tonmoy", Dept: "CSE" },
    { id: 4, Name: "Mushfiq", Dept: "CSE" },
]

// for (let i = 0; i < array.length; i++) {
//     if (array[i].id == 4) {
//         console.log(array[i]);
//     }
// }

const result = array.find(obj => obj.id == 4);
console.log(result);
// If find element is missing return undefine