from transformers import pipeline

# Load a sentiment analysis model from Hugging Face
sentiment_analyzer = pipeline("sentiment-analysis")

def analyze_sentiment(content):
    result = sentiment_analyzer(content)
    return result[0]['label']
