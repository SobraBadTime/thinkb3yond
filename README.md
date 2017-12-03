# thinkb3yond at Yhack2017
thinkb3yond is a Chrome Extension and education tool used to help and encourage users to think more critically about the media that they encounter online. While the 3 is in our name because thinkbeyond was already taken, the 3 is a symbol for the three things that we believe users should think beyond: social media, community, and themselves. 

With nearly 45% of Americans using Facebook and other social media as their main news source and the persistence of fake and sensationalist news, the ability to identify fake news and the political leaning of articles, videos, and even Tweets and Facebook posts is an integral skill. Although social media platforms such as Facebook are making efforts to identify fake news and halt the spread of it, we believe that a lasting and robust solution to halting the spread of sensationalist news is to train the critical thinking skills of internet users and encourage them to take an active role in consuming social media, rather than a passive one.

thinkb3yond promotes critical thinking by using Google Machine Learning APIs and presenting more information about the media that they are interacting with. The Google Natural Language API, for example, is utilized to calculate the sentiment of text in news article and indicate to users that there is a highly positive, highly negative, or neutral attitude in the writing. This is useful because sensationalist and fake news tend to be written with more sentiment, while real news tends to have more a more neutral tone. This serves two purposes, first, it provides feedback to the user about the credibility of the media that they are interacting with and second, and we find more important, we help train the users ability to measure credibility on their own, which they can take beyond their social media usage.

## Deployment
We are using Google Cloud Platform to deploy the server of our Chrome Extension.

## Built With
* Google Natural Language API
  * We are using the Natural Language API to analyze the sentiment of media with text, from text in articles to text from pictures.
* Google Vision API
  * We are using the Vision API to gather information and analyze images that users might encounter while surfing the web or using social media.
* In the future...
  * Video Analysis and Parsing: We would like to work with some method of analyzing video. The Google Cloud Video Intelligence API could have been a good start to this, but it only provides labeling, while what we want is to be able to analyze text, the transcription of speech in the video, and possibly the political leaning of the images used in the video. 
  * Google Speech API: This would be used to take audio and transcribe it to speech so that we can analyze and parse speeches with the Natural Language API.
  

## Hackers
* Sushma Mahadeo - 6th year Bachelor Student from the CUNY John Jay College of Criminal Justice
* Cleider Gomez - 2nd year Bachelor Student from the University of California, Irvine
* Janella Pizarro - 5th year Bachelor Student from the University of California, Irvine
* Shoumik Chowdhury - 1st year Bachelor Student from Yale University

## Acknowledgements
We would like to thank the Yhack volunteers, judges, and mentors for hosting a great hackathon and for all of the assistance. Special thanks to Ryan from Google for providing guidance in developing with the Google Cloud Platform and using the Google Machine Learning APIs.
