const express = require('express');

const app = express();

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze

// route so thatt wehn it comes to /click button 
// url

app.get("/click_button/:want", function(req, response){
  // The text to analyze
// http://localhost:3000/click_button/all this stupid data

// tehn req = "all this stupd data"
  console.log('req =', req.params.want)
  const text = req.params.want;

const document = {  
  content: text,
  type: 'PLAIN_TEXT',
};
  // sentiment api 
  // Detects the sentiment of the text
  client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);


    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(`${text} ${sentiment.score} ${sentiment.magnitude}`)

  })
  .catch(err => {
    console.error('ERROR:', err);
  });

})


// http://localhost:3000/
// dont we create a special url
app.listen(3000, function() {
  // print a message when the server starts listening
  console.log("server starting on 3000");
});
