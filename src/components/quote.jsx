async function emoji(callback) {
  const name = 'slightly%20smiling%20face';
  const apiKey = '2VyJFEAwAfCwJeQRTJpUKw==qoL1KftFFfAoQ4th';

  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/emoji?name=${name}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    if (!response.ok) {
      console.error('Error:', response.status, response.statusText);
      return;
    }

    const data = await response.json();
    callback(data[0]);
  } catch (error) {
    console.error('Request failed:', error);
  }
}

export default emoji;
