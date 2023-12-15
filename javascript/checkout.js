// checkout.js

document.addEventListener('DOMContentLoaded', function () {
    var invoiceElement = document.getElementById('invoice');
    var totalPriceElement = document.getElementById('total-price');
    var purchasedProductsElement = document.getElementById('purchased-products');

    // Retrieve order data from local storage
    var orderData = JSON.parse(localStorage.getItem('orderData')) || {};
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display invoice details
    displayInvoice();

    function displayInvoice() {
        // Clear previous invoice details
        invoiceElement.innerHTML = '';
        purchasedProductsElement.innerHTML = '';

        // Display order information
        var orderDetails = document.createElement('div');
        orderDetails.innerHTML = `
            <h3>Order Information</h3>
            <p>Name: ${orderData.name}</p>
            <p>Email: ${orderData.email}</p>
            <p>Address: ${orderData.address}</p>
        `;
        invoiceElement.appendChild(orderDetails);

        // Display purchased products
        var totalAmount = 0;
        cart.forEach(function (item) {
            var productItem = document.createElement('div');
            productItem.innerHTML = `
                <p>${item.productName} - Quantity: ${item.quantity}</p>
                <p>Price: $${(item.productPrice * item.quantity).toFixed(2)}</p>
            `;
            purchasedProductsElement.appendChild(productItem);
            totalAmount += item.productPrice * item.quantity;
        });

        // Display total price
        totalPriceElement.innerText = totalAmount.toFixed(2);
    }
});
