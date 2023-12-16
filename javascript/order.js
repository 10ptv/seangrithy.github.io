// order.js

function addToCart(productName, productPrice, quantity) {
    // Create or update a shopping cart object with the selected product
    var cart = JSON.parse(localStorage.getItem('shoppingCart')) || {
        items: [],
    };

    var newItem = {
        name: productName,
        price: productPrice,
        quantity: quantity,
    };

    cart.items.push(newItem);

    // Save the cart to localStorage or use any other data storage mechanism
    localStorage.setItem('shoppingCart', JSON.stringify(cart));

    // Redirect to order.html
    window.location.href = 'order.html';
}
