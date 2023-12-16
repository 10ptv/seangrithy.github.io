document.addEventListener('DOMContentLoaded', function () {
            // Handle Add to Cart Form Submission
            document.getElementById('addToCartForm').addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent form submission

                // Perform the logic to update the cart and notification
                // For demonstration purposes, let's increment the cart count by 1

                // Get the current cart count
                var currentCartCount = parseInt(document.getElementById('cart-notification').innerText);

                // Increment the cart count
                var newCartCount = currentCartCount + 1;

                // Update the cart count in the navbar
                document.getElementById('cart-notification').innerText = newCartCount;

                // You can perform additional logic here, such as updating the total price, etc.
            });
        });