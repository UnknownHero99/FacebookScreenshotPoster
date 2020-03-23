var config = require('./config').screenshot;
const puppeteer = require('puppeteer');
var textProcessor =  require('./textProcessor.js');

async function screenshotPage(){
  const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://radolska-ponvica.si', {waitUntil: 'load'});
    await page.setViewport({
      width: config.viewPort.width,
      height: config.viewPort.height,
    });
    const element = await page.$(config.selector);
    await element.screenshot({path: config.path + textProcessor.processText(config.name)});

    await browser.close();
}

exports.screenshotPage = screenshotPage;
