document.addEventListener('DOMContentLoaded', function () {
    displayInvoice();
});

function displayInvoice() {
    // Load and display customer information
    const customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || {};
    const customerDetailsContainer = document.getElementById('customerDetails');

    if (customerDetailsContainer) {
        customerDetailsContainer.innerHTML = `
            <p>Name: ${customerInfo.name || 'N/A'}</p>
            <p>Email: ${customerInfo.email || 'N/A'}</p>
            <p>Phone Number: ${customerInfo.phone || 'N/A'}</p>
        `;
    }

    // Load and display the invoice details
    const cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];
    let invoiceDetailsHTML = '<ul>';
    let totalPrice = 0;

    cartContents.forEach((product) => {
        const quantity = product.quantity || 1;
        const productTotal = product.price * quantity;
        totalPrice += productTotal;

        invoiceDetailsHTML += `
            <li>
                <strong>${product.name}</strong> - $${productTotal.toFixed(2)} x ${quantity}
            </li>
        `;
    });

    invoiceDetailsHTML += '</ul>';

    const invoiceDetailsContainer = document.getElementById('invoiceDetails');
    if (invoiceDetailsContainer) {
        invoiceDetailsContainer.innerHTML = `
            <h3>Ordered Items</h3>
            ${invoiceDetailsHTML}
            <p>Total Price: $${totalPrice.toFixed(2)}</p>
        `;
    }

    // Display a thank you message
    const thankYouMessageContainer = document.getElementById('thankYouMessage');
    if (thankYouMessageContainer) {
        thankYouMessageContainer.innerHTML = '<p>Thank you for your order!</p>';
    }

    // Optional: Clear the customer information from localStorage after displaying it
    localStorage.removeItem('customerInfo');
}

function downloadInvoice() {
    // Load customer information
    const customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || {};

    // Build the invoice content
    let invoiceContent = `Invoice\n\n`;
    invoiceContent += `Customer Information:\n`;
    invoiceContent += `Name: ${customerInfo.name || 'N/A'}\n`;
    invoiceContent += `Email: ${customerInfo.email || 'N/A'}\n`;
    invoiceContent += `Phone Number: ${customerInfo.phone || 'N/A'}\n\n`;

    // Load ordered items
    const cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];
    invoiceContent += `Ordered Items:\n`;

    cartContents.forEach((product) => {
        const quantity = product.quantity || 1;
        const productTotal = product.price * quantity;
        invoiceContent += `${product.name} - $${productTotal.toFixed(2)} x ${quantity}\n`;
    });

    // Add total price to the invoice
    const totalPrice = cartContents.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
    invoiceContent += `\nTotal Price: $${totalPrice.toFixed(2)}`;

    // Create a Blob and trigger the download
    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'invoice.txt'; // You can customize the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
