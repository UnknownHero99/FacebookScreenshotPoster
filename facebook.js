var config = require('./config').facebook;
var messageProcessor =  require('./textProcessor.js');
var fs = require('fs');
var FB = require('fb');

function retrivePageID(callback){
  FB.setAccessToken(config.accessToken);
  FB.api(config.pageID, {fields: 'id'}, 'get', function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    pageID = res.id;
    if(config.debugMode) console.log("DEBUG: " + config.pageID + " id is " + res.id );
    callback(res.id);
  });
}

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

function publishPost(path, message, callback){
  if(callback == undefined){
    callback = message;
    message = config.post.message;
  }
  message = messageProcessor.processText(message);
  var fileReaderStream = fs.createReadStream(path);
  FB.api(config.pageID + '/photos', {caption: message, filedata: fileReaderStream}, 'post', function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    callback(res.id);
  });
}

exports.retrivePageAccessToken = retrivePageAccessToken;
exports.publishPost = publishPost;
