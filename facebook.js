var config = require('./config');
var messageProcessor =  require('./textProcessor.js');

var FB = require('fb');
FB.setAccessToken(config.facebook.accessToken);

function retrivePageAccessToken(callback){
    retrivePageID((pageID) => {
    FB.api('me/accounts', 'get', function (res) {
      if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
      }
      var data = res.data;
      data.forEach((page, i) => {
        if(page.id == pageID){
          pageAccessToken = page.access_token;
          FB.setAccessToken(page.access_token);
          callback(page.access_token);
        }
        else{
          console.log('error occurred: user dont have permissions for that page');
          return;
        }
      });
    });
  });
}

function retrivePageID(callback){
  FB.api(config.facebook.pageID, {fields: 'id'}, 'get', function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    pageID = res.id;
    if(config.facebook.debugMode) console.log("DEBUG: " + config.facebook.pageID + " id is " + res.id );
    callback(res.id);
  });
}

function publishPost(message, callback){
  if(callback == undefined){
    callback = message;
    message = config.facebook.post.message;
  }
  message = messageProcessor.processText(message);

  FB.api(config.facebook.pageID + '/feed', { published: !config.facebook.debugMode, message: message }, 'post', function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    callback(res.id);
  });
}

exports.retrivePageAccessToken = retrivePageAccessToken;
exports.publishPost = publishPost;
