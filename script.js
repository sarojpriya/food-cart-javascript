let cartCount = 0;

const cartDisplay = document.createElement("div");

cartDisplay.style.position = "fixed";
cartDisplay.style.top = "20px";
cartDisplay.style.right = "20px";
cartDisplay.style.backgroundColor = "gold";
cartDisplay.style.padding = "10px 15px";
cartDisplay.style.borderRadius = "10px";
cartDisplay.style.fontWeight = "bold";
cartDisplay.innerText = "Cart Items: 0";

document.body.appendChild(cartDisplay);

const buttons = document.querySelectorAll(".card button");

for(let i = 0; i < buttons.length; i++){

    buttons[i].onclick = function(){

        cartCount++;

        cartDisplay.innerText = "Cart Items: " + cartCount;

        let foodName =
        buttons[i].parentElement.querySelector("h3").innerText;

        alert(foodName + " added to cart");

    };

}
