const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

axios.post('https://api.example.com/create', {
    key: 'value'
  })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error creating resource:', error);
  });

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Request failed:', error);
    return Promise.reject(error);
  }
);

// Example using async/await
async function fetchData() {
  try {
    const response = await axios.get('https://api.stripe.com/v1/charges?limit=100&after=123456');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();
