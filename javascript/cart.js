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

