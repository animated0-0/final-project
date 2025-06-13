let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function showCart() {
    let output = "Your Cart:\n";
    let total = 0;
    cart.forEach(item => {
        output += `${item.name} - $${item.price.toFixed(2)}\n`;
        total += item.price;
    });
    output += `\nTotal: $${total.toFixed(2)}`;
    alert(output);
}
