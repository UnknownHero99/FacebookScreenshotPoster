var config = require('./config');
var moment = require('moment');
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
    callback(res.id);
  });
}

function publishPost(message, callback){
  if(callback == undefined){
    callback = message;
    message = processMessage(config.facebook.post.message);
  }
  FB.api(config.facebook.pageID + '/feed', { published: false, message: message }, 'post', function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    callback(res.id);
  });
}

function processMessage(message){
  message = message.replace('{weekFromToDate}', weekFromToDate());
  return message;
}

function weekFromToDate(){
  const fromDate = moment().startOf('isoWeek');
  const toDate = moment().endOf('isoWeek').subtract(2,'days');
  return fromDate.format('DD.M') + ' - ' + toDate.format('DD.M');
}

exports.retrivePageAccessToken = retrivePageAccessToken;
exports.publishPost = publishPost;
exports.processMessage = processMessage;
