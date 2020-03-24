var facebook = require('./facebook.js');
var screenshot = require('./pageScreenshot.js');
var config = require('./config');
var CronJob = require('cron').CronJob;

var job = new CronJob(config.cronJobTime, function() {
  facebook.retrivePageAccessToken((token) => {
    console.log('page access token: ' + token)
    screenshot.screenshotPage((path) => {
      facebook.publishPost(path, (attachementID) => {
          console.log('post id: ' + attachementID)
      });
    });
  });
}, null, true, 'Europe/Ljubljana');
job.start();
