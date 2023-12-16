// client.js
const formData = {
    name: 'John Doe',
    email: 'seangrithy@gmail.com',
    address: '123 Main St, City',
    // Add other form fields as needed
  };
  
  axios.post('http://localhost:3000/sendEmail', formData)
    .then(response => {
      console.log(response.data);
      // Handle success, e.g., show a success message to the user
    })
    .catch(error => {
      console.error(error);
      // Handle error, e.g., show an error message to the user
    });
  