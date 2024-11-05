import React, { useState, useEffect } from 'react';

function NewsFeed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/news')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>News Feed</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article.title} - Bias: {article.bias}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFeed;
