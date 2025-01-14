const arr = [1, 2, 3, 4, 5];
arr.forEach(x => {
    x = x * 2
    console.log(x);
})

const array = [
    { id: 1, Name: "Fahim", Dept: "CSE" },
    { id: 2, Name: "Kawshik", Dept: "BBA" },
    { id: 3, Name: "Tonmoy", Dept: "CSE" },
    { id: 4, Name: "Mushfiq", Dept: "CSE" },
]
array.forEach(x => {
    console.log(x.Name, "-", x.Dept);

})