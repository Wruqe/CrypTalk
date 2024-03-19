const apiKey = "pub_4029541552aa06e0abb08fc93992af4e5a447";
const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the data as needed
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });