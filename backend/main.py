from fastapi import FastAPI
from app.api.routes.news import news_router

app = FastAPI()

app.include_router(news_router, prefix="/api/news")
