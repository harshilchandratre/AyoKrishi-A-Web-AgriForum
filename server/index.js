/* eslint-disable no-undef */
const express = require('express');
const axios = require('axios');


const app = express();
const port = 3002;
const apiKey = 'b2b92dc8b904407f927d21fde2bf464b';
const keyword = 'agriculture'

// Enable CORS to allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// Define a route to fetch news data from the News API
app.get('/api/news', async (req, res) => {
  try {
    const { page, pageSize } = req.query;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching news data.' });
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
