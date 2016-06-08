
//conf.js
exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['spec.js'],
  capabilities: {
	  'browserName' : 'IE',
	  'browser_version' : '8.0',
	  'os' : 'Windows',
	  'os_version' : '7',
	  'resolution' : '1024x768'
	  'browserstack.user' : process.env.USERNAME,
	  'browserstack.key' : process.env.AUTOMATE_KEY,
	  'browserstack.debug' : 'true'
  }
//  multiCapabilities: [{
//	  browserName: 'firefox'
//  }, {
//	  browserName: 'chrome'
//  }]
}