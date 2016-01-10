
Isomorphic React Redux application
------------------------------------
Initial Boilerplate: https://github.com/WebbyLab/itsquiz-wall

## Installation (development)

1. Inside folder etc create ``no-share.json`` and insert:
 {
  "googleClientID": "",
  "googleClientSecret": "",
  "facebookClientID": "",
  "facebookClientSecret": ""
}
2. ```npm install``` 
3. ```cp etc/client-config.json.sample etc/client-config.json``` (by default connect to production REST API)
4. ```npm run nodemon```
5. ```npm run webpack-devserver``` (in another terminal, and wait until build is ready)
6. open http://localhost:3001
7. Google Auth Functionality: Register app at https://console.developers.google.com and fill google part at ``no-share.json``
8. FB Auth Functionality: Register app at https://developers.facebook.com/ and fill facebook part ``no-share.json``



