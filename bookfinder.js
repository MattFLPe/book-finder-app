

const form = document.getElementById("#form-search") 
form.addEventListener('submit', (event) => {
    event.preventDefault()

const apiUrl = 'https://api.example.com/data';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  })
})