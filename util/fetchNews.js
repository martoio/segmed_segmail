require('dotenv').config();
const fs = require('fs');
const path = require('path');
const NewsAPI = require('newsapi');

const FILE_LOCATION = path.resolve(__dirname, '../data/data.json');

if(!process.env.NEWS_API_KEY === undefined) {
    throw new Error('No API key found. Please follow the instructions in the docs to set this up.')
}

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
const results = [];

newsapi.v2.everything({
    q: 'medicine',
    language: 'en',
    sortBy: 'relevancy',
    page: 1,
    pageSize: 100,
}).then(res => {
    i = 1;
    for(let article of res.articles) {
        results.push({
            id: i++,
            title: article.title,
            body: article.description,
        });
    }
    return results;
}).then(completeResults => {
    fs.writeFileSync(FILE_LOCATION, JSON.stringify({records: completeResults}));
}).catch(console.error);