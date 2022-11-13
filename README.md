# vYOU

## About the Idea

vYOU is a view for you.


The idea behind vYOU is to put interactive screens around the city to make people improve their lifestyle in a "greener" way. 


The screen is normally in an always-on display mode (to save energy), such that it just shows basic information on a dark screen.

When somebody goes in front of it, thanks to a proximity sensor (linked to a raspberry pi4) it goes on and it shows more things, such that time, date, temperature (taken from the raspberry).

It also shows how many people walked in front of it and it aims also to count the number of people who rode a bike in front of it. This allows everybody to keep track how much green their city is becoming. This feature has been developed by using a ESP32 Board with the cam module and a neural network model, trained with TensorFlow.

The screen also shows a random suggestion (which changes every minute) on what to do to become more eco-friendly and greener. 

It is also possible, by interacting with the screen, to see the map of near rentable electric bikes and scooters. 

The last feature is that it is possible for the people to take a quiz on the screen and to test their knowledge in the Climate Change context. Through this, people are able to learn and discover what they do not know, but at the same time if they guess a number of quiz, they will be rewarded with a possible discount / gift card for electrical means of transport (so to promote them more) and/or a redeemable NFT (whose image is generated randomly by DALLE2 AI always in the green/eco context).

## Project Structure

The github repository contains a lot of other parts of the project.

- frontend - contains everything about the frontend of the website and it has been realized by using ReactJs.
- globalBackend - is the backend for the website realized using NodeJs.
- localBackend - contains the backend of the Hardware part so that an API to access the data from the Hardware is available. Realized in Django.
- esp32cam_recognition - contains the setup of the ESP32 Board with the cam module with the implementation of the neural network model, trained with TensorFlow.

## Next Steps

- [x] Implement in frontend the view of the Image generated after winning the Quiz 
- [ ] Implement the DALLE2 API for generating an image from random words (almost done)
- [ ] Implement OpenSea API for uploading the NFT image on the marketplace
- [ ] Implement the posssibility to redeem the NFT through the screen through such a QR code or something
