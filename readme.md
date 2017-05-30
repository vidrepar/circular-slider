# Circular slider

- Pure Javascript ( no libraries )
- Touch/Mobile friendly
- OLOO design
- [Live demo](http://circularslider.vidrepar.com/)

## Project structure

    Project
        Server
        App
        
## Description

App is the most important directory in this repo. To run it locally, go into the app directory and install gulp dependencies. You'll get serve ( also live reloading via browser-sync ) and build processes. Otherwise, no libraries are used in this project, just good old Javascript.

 Regarding .js files and style of programming, Slider.js brings everything together; others consist mostly of pure functions which are being called either in Slider.js in initalization phase or in Events.js during user input.

 ``` 
 cd circular-slider
 ```
 ``` 
 cd app
 ```
 
``` 
npm i
```
 
 Express serves static files on port 3333. To run it:
 
 ``` 
 cd circular-slider/server
 ```
  ``` 
  npm i
  ```
 ``` 
 cd circular-slider
 ```
 
 ``` 
 node run
 ```