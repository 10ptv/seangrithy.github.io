// products.js

document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    var totalPriceElement = document.getElementById('total-price');

    var cart = [];

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var productElement = button.parentElement;
            var productId = productElement.getAttribute('data-product-id');
            var productName = productElement.getAttribute('data-product-name');
            var productPrice = parseFloat(productElement.getAttribute('data-product-price'));

            addToCart(productId, productName, productPrice);
            updateTotalPrice();
        });
    });

    function addToCart(productId, productName, productPrice) {
        // Check if the product is already in the cart
        var existingProduct = cart.find(function (item) {
            return item.productId === productId;
        });

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                productName: productName,
                productPrice: productPrice,
                quantity: 1
            });
        }

        // Save the cart data to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateTotalPrice() {
        var totalPrice = cart.reduce(function (total, item) {
            return total + item.productPrice * item.quantity;
        }, 0);

        totalPriceElement.innerText = totalPrice.toFixed(2);
    }
});
// script.js

// Function to Go to Home (Redirect to index.html)
function goToHome() {
    window.location.href = 'index.html';
}

// Your other JavaScript logic goes here
