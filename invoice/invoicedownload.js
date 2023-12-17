document.addEventListener('DOMContentLoaded', function () {
    // Retrieve invoiceInfo from localStorage
    const invoiceInfo = JSON.parse(localStorage.getItem('invoiceInfo'));

    // Get the elements to display customer information, invoice items, and total price
    const customerInfoElement = document.getElementById('customerInfo');
    const invoiceItemsElement = document.getElementById('invoiceItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkoutButton');

    // Display Customer Information
    if (invoiceInfo && invoiceInfo.customer) {
        const customerInfoHTML = `
            <h2>Customer Information</h2>
            <p>Name: ${invoiceInfo.customer.name}</p>
            <p>Email: ${invoiceInfo.customer.email}</p>
            <p>Phone: ${invoiceInfo.customer.phone}</p>
            <p>Address:</p>
            <ul>
                <li>Country: ${invoiceInfo.customer.address.country}</li>
                <li>Province/City: ${invoiceInfo.customer.address.province}</li>
                <li>Commune: ${invoiceInfo.customer.address.commune}</li>
                <li>District: ${invoiceInfo.customer.address.district}</li>
                <li>Home Number: ${invoiceInfo.customer.address.homeNumber}</li>
            </ul>
        `;
        customerInfoElement.innerHTML = customerInfoHTML;
    } else {
        customerInfoElement.innerHTML = '<p>No customer information available.</p>';
    }

    // Display Invoice Items
    if (invoiceInfo && invoiceInfo.items && invoiceInfo.items.length > 0) {
        const invoiceItemsHTML = `
            <h2>Invoice Items</h2>
            <ul>
                ${invoiceInfo.items.map(item => `<li>${item.quantity} ${item.name}(s) - $${item.total.toFixed(2)}</li>`).join('')}
            </ul>
        `;
        invoiceItemsElement.innerHTML = invoiceItemsHTML;
    } else {
        invoiceItemsElement.innerHTML = '<p>No items in the invoice.</p>';
    }

    // Display Total Price
    if (invoiceInfo && invoiceInfo.items && invoiceInfo.items.length > 0) {
        const totalPrice = invoiceInfo.items.reduce((total, item) => total + item.total, 0).toFixed(2);
        const totalPriceHTML = `<h2>Total Price: $${totalPrice}</h2>`;
        totalPriceElement.innerHTML = totalPriceHTML;
    } else {
        totalPriceElement.innerHTML = '<p>No total price available.</p>';
    }

    // Event listener for "Proceed to Checkout" button
    checkoutButton.addEventListener('click', function () {
        // Redirect to checkout.html or perform any desired action
        window.location.href = 'checkout.html';
    });
});
