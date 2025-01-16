const target = document.getElementById("Name");
target.style.color = "red";

// const x = document.getElementsByClassName("xenon");
// x[0].style.color = "green"

const elements = document.getElementsByClassName("box");
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.style.color = "yellow";
    if (element.id == "3") {
        element.style.backgroundColor = "blue";
    }
    else {
        element.style.backgroundColor = "green";
    }
};

