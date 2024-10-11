// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';

function News() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [setTotalPages] = useState(1);

  const pageSize = 10; // Number of news articles per page
  const totalPages = 10; // Number of news articles per page

  const fetchNews = async (page) => {
    try {
      const response = await axios.get(`http://localhost:3002/api/news?page=${page}&pageSize=${pageSize}`);
      setNews(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / pageSize));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="para-box">
        {news.map((article, index) => (
          <div key={index} className="para1">
            <img className='para-img' src={article.urlToImage} alt={`Image ${index}`} width="400" height="300" />
            <p>
              {article.description}
              <br /><br />
              <a href={article.url} target="_blank" rel="noopener noreferrer" className='read-more'>
                Read more
              </a>
            </p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <Link onClick={handlePrevPage} disabled={currentPage === 1} className='navbar-link pagination-disabled'>
          Prev 
        </Link>
        <>&nbsp;</>
        <span className='pagination-indicator'>{`Page ${currentPage} of ${totalPages}`}</span>
        <>&nbsp;</>
        <Link onClick={handleNextPage} disabled={currentPage === totalPages} className='navbar-link pagination-disabled'>
          Next
        </Link>
      </div>
    </div>
  );
}

export default News;
