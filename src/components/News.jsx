import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/news') // Update the URL to match your server
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="para-box">
      {news.map((article, index) => (
        <div key={index} className="para1">
          <img className='para-img' src={article.urlToImage} alt={`Image ${index}`} width="400" height="300" />
          <p>
            {article.description}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default News;
