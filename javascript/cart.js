// cart.js

document.addEventListener('DOMContentLoaded', function () {
    var cartItemsElement = document.getElementById('cart-items');
    var totalPriceElement = document.getElementById('total-price');
    var checkoutForm = document.getElementById('checkout-form');

    // Load cart data from local storage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart items and total price on cart.html
    updateCart();

    function updateCart() {
        // Clear previous cart items
        cartItemsElement.innerHTML = '';

        // Populate cart items
        cart.forEach(function (item) {
            var cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = `
                <p>${item.productName} - Quantity: ${item.quantity}</p>
                <p>Price: $${(item.productPrice * item.quantity).toFixed(2)}</p>
            `;
            cartItemsElement.appendChild(cartItemElement);
        });

        // Update total price
        var totalPrice = cart.reduce(function (total, item) {
            return total + item.productPrice * item.quantity;
        }, 0);

        totalPriceElement.innerText = totalPrice.toFixed(2);
    }

    // Form submission event
    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        var formData = new FormData(checkoutForm);
        var orderData = {};

        formData.forEach(function (value, key) {
            orderData[key] = value;
        });

        // Save order data to local storage
        localStorage.setItem('orderData', JSON.stringify(orderData));

        // Redirect to checkout.html
        window.location.href = 'checkout.html';
    });
});
// Assuming you have some logic in cart.js to handle cart data
// For example, storing the selected item in local storage
function addToCart(item) {
    localStorage.setItem('selectedItem', JSON.stringify(item));
}

// Triggered when the user adds an item to the cart
// You might call this function when the user interacts with your cart interface
var selectedItem = {
    name: 'Product A',
    price: 19.99,
    quantity: 2
};

addToCart(selectedItem);

