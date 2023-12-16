// invoice.js

// Parse query parameters
var urlParams = new URLSearchParams(window.location.search);
var invoiceData = JSON.parse(decodeURI(urlParams.get('data')));

// Display invoice information in invoice.html
var invoiceItemsElement = document.getElementById('invoice-items');
var totalPriceElement = document.getElementById('total-price');

// Clear previous content
invoiceItemsElement.innerHTML = '';

// Display each item in the invoice
invoiceData.items.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.innerHTML = `<p>${item.name} - Quantity: ${item.quantity}</p>`;
    invoiceItemsElement.appendChild(itemElement);
});

// Display total price
totalPriceElement.textContent = invoiceData.totalPrice.toFixed(2);
