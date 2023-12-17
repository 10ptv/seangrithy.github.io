// cart.js

// Function to handle going back to the main shop page
function goToShop() {
    window.location.href = 'index.html';
}

// Function to initialize the cart content when the page loads
function initCart() {
    const cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];
    displayCartContents(cartContents);
}

// Function to display the cart contents
function displayCartContents(cartContents) {
    const cartContainer = document.getElementById('cartContents');
    if (cartContainer) {
        if (cartContents.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            let cartHTML = '<ul>';
            cartContents.forEach((product, index) => {
                cartHTML += `
                    <li>
                        <strong>${product.name}</strong> - $${product.price.toFixed(2)}
                        <p>${product.description}</p>
                        <div>
                            <button onclick="removeFromCart(${index})">Remove</button>
                            <button onclick="increaseQuantity(${index})">+</button>
                            <span id="quantity-${index}">${product.quantity}</span>
                            <button onclick="decreaseQuantity(${index})">-</button>
                        </div>
                    </li>
                `;
            });
            cartHTML += '</ul>';
            cartContainer.innerHTML = cartHTML;

            updateCartSummary(cartContents);
        }
    }
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Remove the item at the specified index
    cartContents.splice(index, 1);

    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    
    // Update the displayed cart contents
    displayCartContents(cartContents);
}

// Function to increase the quantity of an item in the cart
function increaseQuantity(index) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Increase the quantity of the item at the specified index
    cartContents[index].quantity = (cartContents[index].quantity || 1) + 1;

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    // Update the displayed cart contents
    displayCartContents(cartContents);
}

// Function to decrease the quantity of an item in the cart
function decreaseQuantity(index) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Decrease the quantity of the item at the specified index, but not below 1
    cartContents[index].quantity = Math.max(1, (cartContents[index].quantity || 1) - 1);

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    // Update the displayed cart contents
    displayCartContents(cartContents);
}

// Function to update the cart summary
function updateCartSummary(cartContents) {
    const totalAmountElement = document.getElementById('totalAmount');
    const totalPriceElement = document.getElementById('totalPrice');

    if (totalAmountElement && totalPriceElement) {
        const totalAmount = cartContents.reduce((total, product) => total + (product.quantity || 1), 0);
        const totalPrice = cartContents.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);

        totalAmountElement.innerText = totalAmount.toString();
        totalPriceElement.innerText = totalPrice.toFixed(2);
    }
}

// Event listener for going back to the main shop page
document.addEventListener('DOMContentLoaded', function () {
    initCart();

    const goToShopButton = document.getElementById('goToShopButton');
    if (goToShopButton) {
        goToShopButton.addEventListener('click', goToShop);
    }
});
// ... (previous functions unchanged) ...

// Function to place the order and redirect to order.html
function placeOrder() {
    const cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Check if the cart is not empty before placing the order
    if (cartContents.length === 0) {
        alert('Your cart is empty. Add items before placing an order.');
        return;
    }

    // Redirect to order.html
    window.location.href = 'order.html';
}

// ... (previous functions unchanged) ...
// Function to update the cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    const cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    if (cartCountElement) {
        const totalAmount = cartContents.reduce((total, product) => total + (product.quantity || 1), 0);
        cartCountElement.innerText = totalAmount.toString();
    }
}
// Example: Call updateCartCount after adding an item to the cart
function addToCart(product) {
    // Your code to add the product to the cart

    // Update the cart count
    updateCartCount();
}
// Function to display the cart contents
function displayCartContents(cartContents) {
    const cartContainer = document.getElementById('cartContents');
    if (cartContainer) {
        if (cartContents.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            let cartHTML = '<ul>';
            cartContents.forEach((product, index) => {
                cartHTML += `
                    <li>
                        <strong>${product.name}</strong> - $${product.price.toFixed(2)}
                        <p>${product.description}</p>
                        <div>
                            <!-- Remove the "Remove" button -->
                            <button onclick="increaseQuantity(${index})">+</button>
                            <span id="quantity-${index}">${product.quantity}</span>
                            <button onclick="decreaseQuantity(${index})">-</button>
                        </div>
                    </li>
                `;
            });
            cartHTML += '</ul>';
            cartContainer.innerHTML = cartHTML;

            updateCartSummary(cartContents);
        }
    }
}
// Function to decrease the quantity of an item in the cart
function decreaseQuantity(index) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Decrease the quantity of the item at the specified index, but not below 1
    cartContents[index].quantity = Math.max(0, (cartContents[index].quantity || 1) - 1);

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    // Update the displayed cart contents
    displayCartContents(cartContents);
}
// Function to decrease the quantity of an item in the cart
function decreaseQuantity(index) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Decrease the quantity of the item at the specified index, but not below 0
    cartContents[index].quantity = Math.max(0, (cartContents[index].quantity || 1) - 1);

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    // Update the displayed cart contents
    displayCartContents(cartContents);

    // Update the cart summary to ensure the total amount is correct
    updateCartSummary(cartContents);
}
// Function to decrease the quantity of an item in the cart
function decreaseQuantity(index) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Decrease the quantity of the item at the specified index, but not below 0
    cartContents[index].quantity = Math.max(0, (cartContents[index].quantity || 1) - 1);

    if (cartContents[index].quantity === 0) {
        // Remove the item from the cart when the quantity becomes zero
        cartContents.splice(index, 1);
    }

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    // Update the displayed cart contents
    displayCartContents(cartContents);

    // Update the cart summary to ensure the total amount is correct
    updateCartSummary(cartContents);
}
