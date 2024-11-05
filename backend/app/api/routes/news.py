from fastapi import APIRouter
from app.utils.bias_detection import detect_bias
from app.utils.sentiment_analysis import analyze_sentiment

news_router = APIRouter()

# Example endpoint for retrieving news articles
@news_router.get("/")
async def get_news():
    sample_articles = [
        {"title": "Market Update", "content": "Stock market hits new highs...", "bias": "neutral"},
        {"title": "Political Rally", "content": "Candidate promotes divisive policies...", "bias": "high"}
    ]
    return sample_articles

# Example endpoint for bias and sentiment analysis
@news_router.post("/analyze")
async def analyze_article(content: str):
    bias = detect_bias(content)
    sentiment = analyze_sentiment(content)
    return {"bias": bias, "sentiment": sentiment}
