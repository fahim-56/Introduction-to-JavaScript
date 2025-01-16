const allProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            displayProduct(data)
        })
}
allProduct()

const displayProduct = (products) => {
    const productContainer = document.getElementById("product-container")
    products.forEach(product => {
        console.log(product);
        const div = document.createElement("div");
        div.classList.add("innerDiv");
        div.innerHTML = `
        <img class="image" src=${product.image} alt="" />
        <h4>Product Name: ${product.title}</h4>
        <h4>Price: ${product.price}</h4>
        <p>Product discriptions: ${product.description}</p>
        <div class="btn">
            <button onclick="details('${product.id}')", class="btn1">
                Details
            </button>
            <button onclick="AddToCart('${product.title}','${product.price}')" class="btn2">
                Add to cart
            </button>
        </div>
        `
        productContainer.append(div)

    });
};
let count = 0;
const AddToCart = (Name, price) => {

    //Cart Count ++
    const previousCartCount = document.getElementById("cartCount").innerText;
    let newCartCount = parseInt(previousCartCount) + 1;

    //Cart Count Daisplay
    document.getElementById("cartCount").innerHTML = newCartCount;

    //Manue add to screen
    const container = document.getElementById("cart");
    const div = document.createElement("div");
    div.classList.add("cartProduct")
    div.innerHTML = `
    <p>${Name}</p>
    <h4>$${price}</h4>
    `
    //Total Price Update
    container.appendChild(div);
    count += parseFloat(price);
    document.getElementById("total").innerText = count.toFixed(1);
};

const details = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            displayProduct(data)
        })
}