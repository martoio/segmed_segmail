# segmed_segmail

## Setup
This demo app comes with everything to run it. You can just run:
```
npm install
npm run start:dev
```
Тhis should verify that a dummy data file exists, and that you can use it for the application.
If you get an error that you do not have an API key, you will need to go to https://newsapi.org/ and register for an API key. Once you have done that and you have your API key, create a `.env` file:
```
touch .env
```
And add the API key to it:
```
# inside .env
NEWS_API_KEY={your API key goes here}
```
From there, you can run the `start:dev` npm command again.

## Project Structure
This is a React project built with Typescript and packaged with Webpack.
The main entry point is `src/index.tsx`, which is just used to initialize the `<App>` component.
The driver component is found in `src/components/index.tsx -> App`. This component stores all of the state for the application and initializes the [Lunr.js](https://lunrjs.com/) index.

`App` conditionally renders either a `Preview` component or the `FilterPane`, `TagManager`, and `RecordList`.
`RecordList` is a simple table that renders a filtered subset of results returned from the Lunr index.
`TagManager` is a simple component that encapsulates displaying and creating new tags.
`FilterPane` has the 2 fields that allow the user to provide search terms for Lunr.

## Why Lunr
Since this is meant to emulate a search application, the logical approach would be to incorporate a search engine/information retrieval engine. The most popular open source solutions are Lucene, Elasticsearch and Solr, but those all act as external DBs. In this case, we use a lightweight Lucene clone written in JS. This provides us with a query syntax familiar to users of Lucene and provides us with a functioning inverted-index for searching without having to roll our own.