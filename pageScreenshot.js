var config = require('./config').screenshot;
const puppeteer = require('puppeteer');
var textProcessor =  require('./textProcessor.js');

async function screenshotPage(callback){
    const screenshotPath = config.path + textProcessor.processText(config.name);
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(config.url, {waitUntil: 'load'});
    await page.setViewport({
      width: config.viewPort.width,
      height: config.viewPort.height,
    });
    const element = await page.$(config.selector);
    await element.screenshot({path: screenshotPath});

    await browser.close();
    console.log(screenshotPath);
    callback(screenshotPath);
}

exports.screenshotPage = screenshotPage;
