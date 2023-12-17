// order.js

document.addEventListener('DOMContentLoaded', function () {
    loadOrderDetails();
});

function loadOrderDetails() {
    const cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];
    const totalAmountElement = document.getElementById('orderTotalAmount');
    const totalPriceElement = document.getElementById('orderTotalPrice');
    const orderDetailsContainer = document.getElementById('orderDetails');

    if (totalAmountElement && totalPriceElement && orderDetailsContainer) {
        const totalAmount = cartContents.reduce((total, product) => total + (product.quantity || 1), 0);
        const totalPrice = cartContents.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);

        totalAmountElement.innerText = totalAmount.toString();
        totalPriceElement.innerText = totalPrice.toFixed(2);

        let orderDetailsHTML = '<ul>';
        cartContents.forEach((product) => {
            orderDetailsHTML += `
                <li>
                    <strong>${product.name}</strong> - $${product.price.toFixed(2)} x ${product.quantity}
                </li>
            `;
        });
        orderDetailsHTML += '</ul>';

        orderDetailsContainer.innerHTML = orderDetailsHTML;
    }
}

function submitOrder() {
    // Get customer information from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validate the form fields as needed

    // Save customer information to localStorage
    const customerInfo = {
        name,
        email,
        phone
    };

    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));

    // For simplicity, you might want to redirect to the invoice page directly
    window.location.href = 'invoice.html';
}
