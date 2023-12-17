document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const addToCartButton = document.getElementById('addToCart');
    const generateInvoiceButton = document.getElementById('generateInvoice');
    const cartItemsList = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    const itemSelect = document.getElementById('itemSelect');
    const itemQuantityInput = document.getElementById('itemQuantity');
    const itemPriceInput = document.getElementById('itemPrice');
    const itemPricesInput = document.getElementById('itemPrices');
    const customerNameInput = document.getElementById('customerName');
    const customerEmailInput = document.getElementById('customerEmail');
    const customerPhoneInput = document.getElementById('customerPhone');
    const customerAddressCountryInput = document.getElementById('customerAddressCountry');
    const customerAddressProvinceInput = document.getElementById('customerAddressProvince');
    const customerAddressCommuneInput = document.getElementById('customerAddressCommune');
    const customerAddressDistrictInput = document.getElementById('customerAddressDistrict');
    const customerAddressHomeNumberInput = document.getElementById('customerAddressHomeNumber');

    // Array to store items for checkout
    let checkoutData = {
        customer: {},
        items: []
    };

    // Event listener for "Add to Cart" button
    addToCartButton.addEventListener('click', function () {
        // Get item details
        const itemName = itemSelect.options[itemSelect.selectedIndex].text;
        const itemQuantity = parseInt(itemQuantityInput.value, 10);
        const itemPrices = JSON.parse(itemPricesInput.value);

        // Check if quantity is a valid number
        if (isNaN(itemQuantity)) {
            alert('Please enter a valid quantity.');
            return;
        }

        // Get item price based on the selected item
        const itemPrice = itemPrices[itemSelect.value];

        // Check if itemPrice is a valid number
        if (isNaN(itemPrice)) {
            alert('Invalid item price.');
            return;
        }

        // Calculate total amount
        const totalAmount = itemQuantity * itemPrice;

        // Update total amount display
        totalAmountElement.textContent = '$' + totalAmount.toFixed(2);

        // Add item to cart summary
        const cartItem = document.createElement('li');
        cartItem.textContent = `${itemQuantity} ${itemName}(s) - $${totalAmount.toFixed(2)}`;
        cartItemsList.appendChild(cartItem);

        // Store item for checkout
        checkoutData.items.push({
            name: itemName,
            quantity: itemQuantity,
            price: itemPrice,
            total: totalAmount
        });
    });

    // Event listener for "Generate Invoice" button
    generateInvoiceButton.addEventListener('click', function () {
        // Get customer details
        const customerName = customerNameInput.value;
        const customerEmail = customerEmailInput.value;
        const customerPhone = customerPhoneInput.value;
        const customerAddressCountry = customerAddressCountryInput.value;
        const customerAddressProvince = customerAddressProvinceInput.value;
        const customerAddressCommune = customerAddressCommuneInput.value;
        const customerAddressDistrict = customerAddressDistrictInput.value;
        const customerAddressHomeNumber = customerAddressHomeNumberInput.value;

        // Check if required customer information is provided
        if (!customerName || !customerEmail || !customerPhone || !customerAddressCountry || !customerAddressProvince || !customerAddressCommune || !customerAddressDistrict || !customerAddressHomeNumber) {
            alert('Please provide all required customer information.');
            return;
        }

        // Store customer details
        checkoutData.customer = {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
            address: {
                country: customerAddressCountry,
                province: customerAddressProvince,
                commune: customerAddressCommune,
                district: customerAddressDistrict,
                homeNumber: customerAddressHomeNumber
            }
        };

        // Pass the checkoutData object to the checkout.html page
        localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

        // Navigate to checkout.html
        window.location.href = 'checkout.html';
    });

    // Event listener for updating item price based on selection
    itemSelect.addEventListener('change', function () {
        const itemPrices = JSON.parse(itemPricesInput.value);
        const selectedValue = itemSelect.value;
        itemPriceInput.value = itemPrices[selectedValue].toFixed(2);
    });
});
