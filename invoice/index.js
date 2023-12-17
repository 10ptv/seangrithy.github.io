//alert
const bee =document.getElementById('bee');
bee.addEventListener('click', function(){
    alert('ok thank you');
});

bee.addEventListener('click', goToInvoicePage);
//Function go to invoice page
function goToInvoicePage(){
    const invoiceUrl = 'invoice.html';
    //Redirect to invoice.html
    window.location.href = invoiceUrl
}
//invoice
document.addEventListener('DOMContentLoaded', function(){
    const addToCartButton = document.getElementById('addToCart');
    const totalAmount = document.getElementById('totalAmount');
   addToCartButton.addEventListener('click', function(){
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value, 10);
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
   });
    
}); 

//totalAmount calculate

const totalAmount = itemQuantity * itemPrice ;
totalAmount.textConten = '$' +totalAmount.toFixed(2);
//Add item to summery

