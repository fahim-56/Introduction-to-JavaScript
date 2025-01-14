var myName = "Fahim"
var father = {
    FatherName: "Ashraf Hossain CHowdhury",
    age: 65,
    addrees: "Rajbari, Dhaka"
}

var me = [{ name: myName }, { age: 23 }, { addrees: "Rajbari, Dhaka" }, father]

me.push({ Education: "BSc in CSE" })
console.log(me)

me.pop()
console.log(me)

me.unshift("About me :")
console.log(me)

me.shift();

console.log({ LengthOfArray: me.length })
console.log(me[0])
console.log(me[1].name)
console.log(me[1])
console.log(me[2])
console.log(me[3])