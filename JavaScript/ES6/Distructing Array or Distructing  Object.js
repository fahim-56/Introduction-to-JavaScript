const array = ["Fahim", 23, "Rajbari"];
// const [a, b, c] = array;
// console.log(a, b, c);

const [a, b] = array;
console.log(a, b);


const person = {
    Name: "Fahim",
    age: 23,
    address: "Rajbari, Dhaka",
    father: {
        Name: "Ashraf Hossain Chowdhury",
        age: 65,
        address: "Rajbari, Dhaka"
    }
}

// const Name = person.Name
const { Name } = person;
console.log(Name);

// const age = person.age
// const father = person.father
const { age, father } = person
console.log(age);
console.log("Father :", father);