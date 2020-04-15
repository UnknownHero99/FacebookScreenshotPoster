# FacebookScreenshotPoster

used to automate weekly posting screenshot of website element screenshoting and posting it to facebook page

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
```

### Installing

A step by step series of examples that tell you how to get a development env running

clone git repository
```
git clone https://github.com/UnknownHero99/FacebookScreenshotPoster.git
cd FacebookScreenshotPoster
```

edit config file
```
nano config.js
```

to start software
```
node run.js
```

### for deployment use pm2
```
npm install pm2 -g
pm2 start run.js --name FacebookScreenshotPoster
pm2 startup
pm2 save
```

## Authors

* **Jakob Salmič** - [UnknownHero99](https://github.com/UnknownHero99)