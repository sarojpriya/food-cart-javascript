
const cartButtons = document.querySelectorAll(".card button");


let cartCount = 0;


const cartDisplay = document.createElement("div");

cartDisplay.style.position = "fixed";
cartDisplay.style.top = "20px";
cartDisplay.style.right = "20px";
cartDisplay.style.backgroundColor = "gold";
cartDisplay.style.padding = "10px 15px";
cartDisplay.style.borderRadius = "10px";
cartDisplay.style.fontWeight = "bold";
cartDisplay.innerText = `Cart Items: ${cartCount}`;

document.body.appendChild(cartDisplay);


cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        
        cartCount++;

        
        cartDisplay.innerText = `Cart Items: ${cartCount}`;

        
        const foodName =
            button.parentElement.querySelector("h3").innerText;

        e
        alert(foodName + " added to cart!");

    });

});
