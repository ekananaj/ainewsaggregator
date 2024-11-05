import React from 'react';
import NewsFeed from './components/NewsFeed';
import ArticleView from './components/ArticleView';

function App() {
  return (
    <div>
      <h1>AI News Aggregator</h1>
      <NewsFeed />
      <ArticleView />
    </div>
  );
}

export default App;
