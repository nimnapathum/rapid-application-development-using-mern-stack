const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

axios.get(apiUrl)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
