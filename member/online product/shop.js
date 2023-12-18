// shop.js

// Function to handle adding a product to the cart
function addToCart() {
    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = parseInt(cartCount, 10) + 1;
    
    localStorage.setItem('cartCount', cartCount);
    updateCartLabel(cartCount);
    
    alert('Product added to cart!');
}

// Function to update the cart label on the page
function updateCartLabel(cartCount) {
    const cartLabel = document.getElementById('cartCount');
    if (cartLabel) {
        cartLabel.textContent = cartCount;
    }
}

// Function to initialize the cart count when the page loads
function initCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    updateCartLabel(cartCount);
}

// Event listener for the "Add to Cart" button
document.addEventListener('DOMContentLoaded', function () {
    initCartCount();

    const addToCartButton = document.getElementById('addToCartButton');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', addToCart);
    }
});
// shop.js

// Function to handle going to the cart page
function goToCart() {
    window.location.href = 'cart.html';
}
// shop.js

// Function to handle adding a product to the cart
function addToCart() {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Add product information to the cartContents array
    cartContents.push({
        name: 'Product Title', // Replace with the actual product title
        price: 19.99, // Replace with the actual product price
    });

    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    
    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = parseInt(cartCount, 10) + 1;
    
    localStorage.setItem('cartCount', cartCount);
    updateCartLabel(cartCount);
    
    alert('Product added to cart!');
}
// shop.js

// Function to handle adding a product to the cart
function addToCart(productName, productPrice) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Add product information to the cartContents array
    cartContents.push({
        name: productName,
        price: productPrice,
    });

    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    
    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = parseInt(cartCount, 10) + 1;
    
    localStorage.setItem('cartCount', cartCount);
    updateCartLabel(cartCount);
    
    alert('Product added to cart!');
}
// shop.js

// Function to handle adding a product to the cart
function addToCart(productName, productPrice, productDescription) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Add product information to the cartContents array
    cartContents.push({
        name: productName,
        price: productPrice,
        description: productDescription,
    });

    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    
    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = parseInt(cartCount, 10) + 1;
    
    localStorage.setItem('cartCount', cartCount);
    updateCartLabel(cartCount);
    
    alert('Product added to cart!');
}
// shop.js

// Function to handle adding a product to the cart
function addToCart(productName, productPrice, productDescription) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Add product information to the cartContents array
    cartContents.push({
        name: productName,
        price: productPrice,
        description: productDescription,
    });

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = parseInt(cartCount, 10) + 1;

    localStorage.setItem('cartCount', cartCount);
    updateCartLabel(cartCount);

    renderProducts(); // Added to update product display after adding to the cart

    alert('Product added to cart!');
}

// Function to handle removing a product from the cart
function removeFromCart(index) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Remove the item at the specified index
    cartContents.splice(index, 1);

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = Math.max(0, parseInt(cartCount, 10) - 1);

    localStorage.setItem('cartCount', cartCount);
    updateCartLabel(cartCount);

    renderProducts(); // Added to update product display after removing from the cart
}

// Function to render products with remove button
function renderProducts() {
    const productContainers = document.querySelectorAll('.product');

    productContainers.forEach((container, index) => {
        const removeButton = container.querySelector('.removeButton');
        if (removeButton) {
            removeButton.remove();
        }

        const button = container.querySelector('button');
        const newButton = document.createElement('button');
        newButton.innerText = 'Remove';
        newButton.className = 'removeButton';
        newButton.onclick = function () {
            removeFromCart(index);
        };

        button.after(newButton);
    });
}

// Function to handle going to the cart page
function goToCart() {
    window.location.href = 'cart.html';
}
// shop.js

// Function to handle adding a product to the cart
function addToCart(productName, productPrice, productDescription) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Add product information to the cartContents array
    cartContents.push({
        name: productName,
        price: productPrice,
        description: productDescription,
    });

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = parseInt(cartCount, 10) + 1;

    localStorage.setItem('cartCount', cartCount);
    updateCartLabel(cartCount);

    renderProducts(); // Added to update product display after adding to the cart

    alert('Product added to cart!');
}

// Function to handle removing a product from the cart
function removeFromCart(index) {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    // Remove the item at the specified index
    cartContents.splice(index, 1);

    localStorage.setItem('cartContents', JSON.stringify(cartContents));

    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = Math.max(0, parseInt(cartCount, 10) - 1);

    localStorage.setItem('cartCount', cartCount);
    updateCartLabel(cartCount);

    renderProducts(); // Added to update product display after removing from the cart
}

// Function to render products with remove button
function renderProducts() {
    const productContainers = document.querySelectorAll('.product');

    productContainers.forEach((container, index) => {
        const removeButton = container.querySelector('.removeButton');
        if (removeButton) {
            removeButton.remove();
        }

        const button = container.querySelector('button');
        const newButton = document.createElement('button');
        newButton.innerText = 'Remove';
        newButton.className = 'removeButton';
        newButton.onclick = function () {
            removeFromCart(index);
        };

        button.after(newButton);
    });
}

// Function to handle going to the cart page
function goToCart() {
    window.location.href = 'cart.html';
}

// Function to update the cart count on the page
function updateCartLabel(cartCount) {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.innerText = cartCount.toString();
    }
}
