document.getElementById("btn").addEventListener("click", (event) => {
    const x = document.getElementById("input-value").value;
    console.log(x);
    let show = document.getElementById("show_here");
    // show = x;
    // console.log(show);//will display to console bar
    const p = document.createElement("p");
    p.innerText = x;
    p.classList.add("ClassChild");

    // console.log(p);//will display to console bar
    show.appendChild(p);//will display to Screan
    document.getElementById("input-value").value = "";//clear placeholder
    
    const allComments = document.getElementsByClassName("ClassChild");
    for(const element of allComments){
        // console.log(eliment);
        element.addEventListener("click",(e)=>{
            // console.log(e.target);
            // console.log(e.target.parentNode);
            e.target.parentNode.removeChild(element);
        });
    }

});