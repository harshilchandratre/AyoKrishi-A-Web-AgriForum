const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;
const apiKey = 'b2b92dc8b904407f927d21fde2bf464b';

// Enable CORS to allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Define a route to fetch news data from the News API
app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching news data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
