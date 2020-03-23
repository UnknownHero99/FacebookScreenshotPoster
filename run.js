var facebook = require('./facebook.js');
var screenshot = require('./pageScreenshot.js');

screenshot.screenshotPage();
/*
facebook.retrivePageAccessToken((token) => {
  console.log('page access token: ' + token)
  facebook.publishPost((id) => {
    console.log('post id: ' + id)
  });
});*/
