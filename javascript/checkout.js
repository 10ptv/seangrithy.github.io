// checkout.js

// Function to generate the invoice
function generateInvoice() {
    // Assuming you have gathered necessary data in checkout.js
    var invoiceData = {
        totalPrice: 100.00, // Replace with the actual total price
        items: [
            { name: 'Product A', price: 50.00, quantity: 2 },
            { name: 'Product B', price: 25.00, quantity: 1 }
            // Add more items as needed
        ]
    };

    // Redirect to invoice.html and pass invoice data
    window.location.href = 'invoice.html?data=' + encodeURI(JSON.stringify(invoiceData));
}
