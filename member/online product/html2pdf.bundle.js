<script>
  function generatePDF() {
    // Get the HTML content of the invoice container
    const invoiceContainer = document.getElementById('invoiceContainer');
    const invoiceHTML = invoiceContainer.innerHTML;

    // Create a PDF from the HTML content
    html2pdf(invoiceHTML, {
      margin: 10,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
  }
</script>
