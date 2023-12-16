document.addEventListener('DOMContentLoaded', function () {
    // Retrieve selected item details from local storage
    var selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

    // Display selected item details in the form
    var selectedItemDiv = document.getElementById('selected-item');
    var selectedItemHTML = '';

    if (selectedItem) {
        selectedItemHTML = `
            <p>Name: ${selectedItem.name}</p>
            <p>Price: $${selectedItem.price}</p>
            <p>Quantity: ${selectedItem.quantity}</p>
        `;
    } else {
        selectedItemHTML = '<p>No item selected.</p>';
    }

    selectedItemDiv.innerHTML = selectedItemHTML;

    // Your existing order form submission code
    document.getElementById('order-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data including selected item details
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            selectedItem: selectedItem || null,
            // Add other form fields as needed
        };

        // Save order information to local storage for retrieval in checkout.html
        localStorage.setItem('orderDetails', JSON.stringify(formData));

        // Redirect to checkout.html
        window.location.href = 'checkout.html';
    });
});
