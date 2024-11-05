# AI Customizable News Aggregator with Bias Detection

This project collects news articles, analyzes their bias and sentiment, and displays them in a personalized feed.

## Features
- Personalized news feed with real-time articles
- Bias detection to flag highly biased or emotional content
- Sentiment analysis for each article

## Tech Stack
- **Frontend**: React
- **Backend**: FastAPI with Python
- **NLP Models**: Hugging Face transformers for sentiment and bias analysis
- **Database**: PostgreSQL for storing user preferences and articles

## Getting Started
1. Run `docker-compose up` to start the project.
2. Access the frontend at `http://localhost:3000`.
3. Access the backend API at `http://localhost:8000/api/news`.
