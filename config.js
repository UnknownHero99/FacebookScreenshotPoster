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
    randomise: true,
    messages: [
      "message1 {weekFromToDate}",
      "message2 {weekFromToDate}",
      "message3 {weekFromToDate}"
    ]
  }
}

module.exports = config;
