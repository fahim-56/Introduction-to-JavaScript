document.getElementById("btn").addEventListener(
    "click", () => {
        console.log("Sent.");//Ei massage ta direct print hobe
        const inputValue = document.getElementById("input-value").value;
        console.log(inputValue);//Input feild e ja pabe print korbe
    }
);

const sentmassage = () => {
    console.log("Sent.")//Ei massage ta direct print hobe
    const inputValue = document.getElementById("input-value").value;
    console.log(inputValue);//Input feild e ja pabe print korbe
};
