// script.js
document.addEventListener('DOMContentLoaded', function () {
// Function to Go to Home (Redirect to index.html)
function goToHome() {
    window.location.href = 'index.html';
}

// Your other JavaScript logic goes here

document.addEventListener('DOMContentLoaded', function () {
    // Your existing code

    // Function to navigate to the cart page
    window.goToCart = function () {
        window.location.href = 'cart.html'; // Change 'cart.html' to the actual URL of your cart page
    };

    // Example: If you have a button with id 'goToCartButton', you can add a click event listener
    const goToCartButton = document.getElementById('goToCartButton');

    if (goToCartButton) {
        goToCartButton.addEventListener('click', function () {
            goToCart();
        });
    }
});

