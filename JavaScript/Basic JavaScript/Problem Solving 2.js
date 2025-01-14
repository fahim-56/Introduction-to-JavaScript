const array = ["Bangladesh", "Pakisthan", "Afganisthan"];
let biggestLength = array[0];
array.forEach(x => {
    if (biggestLength.length < x.length) {
        biggestLength = x;
    }
});
console.log(biggestLength);
