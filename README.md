# BROODMOTHERS API

## Run
To run the stack, which consists of the express server and mongo database, run the following: 

- `yarn`

- `yarn start-stack`

## Overview
Point your browser to http://localhost:3000/articles 
```
View all saved articles by firing a GET to:
http://localhost:3000/articles/
```

```
Save articles to Mongo by firing a POST with the following body to: http://localhost:3000/articles/

{
    "title": "Basic If Statement Article",
    "content": "This is some lorem ipsum about basic IF statements in Javascript",
    "details": {
    "language": "Javascript",
    "subject": "If statements"
    }
}
```