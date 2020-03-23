var config = {};

config.screenshot = {
  url: '',
  selector: '',
  path: './screenshots/',
  name: 'screenshot{weekFromToDate}.png',
  viewPort: {
    width: 1920,
    height: 1080
  }
}

config.facebook = {
  debugMode: true,//posts wont be published, more console logs
  pageID: "",
  accessToken: "",
  post: {
    message: "",
    attachment:{
      description: "",
    }
  }
}

module.exports = config;
