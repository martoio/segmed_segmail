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