import React from 'react';

function ArticleView({ article }) {
  return (
    <div>
      <h2>{article ? article.title : "Select an article"}</h2>
      <p>{article ? article.content : "No content available"}</p>
    </div>
  );
}

export default ArticleView;
