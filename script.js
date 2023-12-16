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

// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code
});
// script.js
'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // Parse query parameters to get data from order.html
    var urlParams = new URLSearchParams(window.location.search);
    var formData = {};

    // Handle missing or invalid 'data' parameter
    if (urlParams.has('data')) {
        try {
            formData = JSON.parse(decodeURI(urlParams.get('data')));
        } catch (error) {
            console.error('Error parsing data:', error);
        }
    }

    // Function to generate a unique order ID
    function generateOrderID() {
        // Implement your logic to generate a unique order ID
        return 'ORD123456';
    }

    // Function to generate an estimated delivery date
    function generateEstimatedDeliveryDate() {
        // Implement your logic to generate an estimated delivery date
        return 'December 25, 2023';
    }

    // Function to generate tracking content dynamically
    function generateTrackingContent() {
        var trackingDetails = [
            { label: 'Order ID', value: generateOrderID() },
            { label: 'Estimated Delivery Date', value: generateEstimatedDeliveryDate() },
            // Add other tracking details as needed
        ];

        return trackingDetails.map(detail => `<p><strong>${detail.label}:</strong> ${detail.value}</p>`).join('');
    }

    // Display the generated content in the tracking-content div
    document.getElementById('tracking-content').innerHTML = generateTrackingContent();
});
