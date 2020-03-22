var facebook = require('./facebook.js');


facebook.retrivePageAccessToken((token) => {
  console.log('page access token: ' + token)
  facebook.publishPost((id) => {
    console.log('post id: ' + id)
  });
});
