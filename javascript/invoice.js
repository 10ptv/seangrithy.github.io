// invoice.js

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve customer and invoice details from local storage
    var customerDetails = JSON.parse(localStorage.getItem('customerDetails')) || {};
    var invoiceDetails = JSON.parse(localStorage.getItem('invoiceDetails')) || {};
    var purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];

    // Display customer and invoice details
    var invoiceDetailsContainer = document.getElementById('invoice-details');
    invoiceDetailsContainer.innerHTML = `
        <p>Invoice Number: ${invoiceDetails.invoiceNumber}</p>
        <p>Invoice Date: ${invoiceDetails.invoiceDate}</p>
        <p>Customer Name: ${customerDetails.customerName}</p>
        <p>Customer Email: ${customerDetails.customerEmail}</p>
    `;

    // Display purchased items
    var invoiceItemsContainer = document.getElementById('invoice-items');
    var invoiceTotalElement = document.getElementById('total-amount');
    var totalAmount = 0;

    purchasedItems.forEach(function (item) {
        var total = item.quantity * item.unitPrice;
        totalAmount += total;

        var itemRow = document.createElement('tr');
        itemRow.innerHTML = `
            <td>${item.itemName}</td>
            <td>${item.description}</td>
            <td>${item.quantity}</td>
            <td>$${item.unitPrice.toFixed(2)}</td>
            <td>$${total.toFixed(2)}</td>
        `;
        invoiceItemsContainer.querySelector('tbody').appendChild(itemRow);
    });

    // Display total amount
    invoiceTotalElement.innerText = totalAmount.toFixed(2);

    // Optional: Clear local storage after creating the invoice
    localStorage.removeItem('customerDetails');
    localStorage.removeItem('invoiceDetails');
    localStorage.removeItem('purchasedItems');
});
