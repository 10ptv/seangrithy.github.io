document.addEventListener('DOMContentLoaded', function () {
    // Retrieve checkoutData from localStorage
    const checkoutData = JSON.parse(localStorage.getItem('checkoutData'));

    // Get the elements to display customer information, invoice details, and additional information
    const customerInfoElement = document.getElementById('customerInfo');
    const invoiceDetailsElement = document.getElementById('invoiceDetails');
    const orderInfoElement = document.getElementById('orderInfo');
    const thankYouMessageElement = document.getElementById('thankYouMessage');
    const downloadInvoiceButton = document.getElementById('downloadInvoiceButton');
    const saveToLocalButton = document.getElementById('saveToLocalButton');

    // Display Customer Information
    if (checkoutData && checkoutData.customer) {
        const customerInfoHTML = `
            <h2>Customer Information</h2>
            <p>Name: ${checkoutData.customer.name}</p>
            <p>Email: ${checkoutData.customer.email}</p>
            <p>Phone: ${checkoutData.customer.phone}</p>
            <p>Address:</p>
            <ul>
                <li>Country: ${checkoutData.customer.address.country}</li>
                <li>Province/City: ${checkoutData.customer.address.province}</li>
                <li>Commune: ${checkoutData.customer.address.commune}</li>
                <li>District: ${checkoutData.customer.address.district}</li>
                <li>Home Number: ${checkoutData.customer.address.homeNumber}</li>
            </ul>
        `;
        customerInfoElement.innerHTML = customerInfoHTML;
    } else {
        customerInfoElement.innerHTML = '<p>No customer information available.</p>';
    }

    // Display Invoice Details
    if (checkoutData && checkoutData.items && checkoutData.items.length > 0) {
        const invoiceDetailsHTML = `
            <h2>Invoice Details</h2>
            <ul>
                ${checkoutData.items.map(item => `<li>${item.quantity} ${item.name}(s) - $${item.total.toFixed(2)}</li>`).join('')}
            </ul>
        `;
        invoiceDetailsElement.innerHTML = invoiceDetailsHTML;
    } else {
        invoiceDetailsElement.innerHTML = '<p>No items in the invoice.</p>';
    }

    // Display Additional Order Information
    if (checkoutData && checkoutData.items && checkoutData.items.length > 0) {
        const totalPrice = checkoutData.items.reduce((total, item) => total + item.total, 0).toFixed(2);
        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();

        const orderInfoHTML = `
            <h2>Order Information</h2>
            <p>Total Price: $${totalPrice}</p>
            <p>Date: ${currentDate}</p>
            <p>Time: ${currentTime}</p>
        `;
        orderInfoElement.innerHTML = orderInfoHTML;
    } else {
        orderInfoElement.innerHTML = '<p>No order information available.</p>';
    }

    // Display Thank You Message
    const thankYouMessageHTML = '<h2>Thank You!</h2><p>Your order has been received.</p>';
    thankYouMessageElement.innerHTML = thankYouMessageHTML;

    // Event listener for "Download Invoice" button
    downloadInvoiceButton.addEventListener('click', function () {
        downloadInvoiceFile(checkoutData);
    });

    // Event listener for "Save Invoice to Local Storage" button
    saveToLocalButton.addEventListener('click', function () {
        saveInvoiceToLocal(checkoutData);
    });

    // Function to download invoice file as binary
    function downloadInvoiceFile(checkoutData) {
        if (checkoutData && checkoutData.customer && checkoutData.items) {
            const invoiceText = `Customer Name: ${checkoutData.customer.name}\n`
                + `Customer Email: ${checkoutData.customer.email}\n`
                + `Customer Phone: ${checkoutData.customer.phone}\n`
                + `Address:\n`
                + `  Country: ${checkoutData.customer.address.country}\n`
                + `  Province/City: ${checkoutData.customer.address.province}\n`
                + `  Commune: ${checkoutData.customer.address.commune}\n`
                + `  District: ${checkoutData.customer.address.district}\n`
                + `  Home Number: ${checkoutData.customer.address.homeNumber}\n`
                + '\nInvoice Details:\n';

            let index = 1;

            checkoutData.items.forEach(item => {
                invoiceText += `${index}. ${item.quantity} ${item.name}(s) - $${item.total.toFixed(2)}\n`;
                index++;
            });

            // Convert the text to binary
            const uint8Array = new TextEncoder().encode(invoiceText);
            const blob = new Blob([uint8Array], { type: 'application/octet-stream' });

            // Create a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'invoice.bin';

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger a click on the link to initiate the download
            downloadLink.click();

            // Remove the link from the body
            document.body.removeChild(downloadLink);
        } else {
            alert('No invoice information available to download.');
        }
    }

    // Function to save invoice information to local storage
    function saveInvoiceToLocal(checkoutData) {
        if (checkoutData && checkoutData.customer && checkoutData.items) {
            const invoiceInfo = {
                customer: checkoutData.customer,
                items: checkoutData.items
            };

            localStorage.setItem('invoiceInfo', JSON.stringify(invoiceInfo));
            alert('Invoice information saved to local storage.');
        } else {
            alert('No invoice information available to save.');
        }
    }
});
