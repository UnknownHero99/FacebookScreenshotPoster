var config = {};

config.cronJobTime = '0 0 6 * * 1'; // seconds minutes hours days months dayOfWeek

config.screenshot = {
  url: 'https://example.com',
  selector: '#elementID',
  path: './screenshots/',
  name: 'example{weekFromToDate}.png',
  viewPort: {
    width: 1920,
    height: 1080
  }
}

config.facebook = {
  pageID: "facebookPageID",
  accessToken: "facebookAccessTOKEN",
  post: {
    message: "message {weekFromToDate}"
  }
}

module.exports = config;
