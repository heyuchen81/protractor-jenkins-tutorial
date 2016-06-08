//conf.js
exports.config = {
	framework : 'jasmine',
	// seleniumAddress: 'http://localhost:4444/wd/hub',
	seleniumAddress : 'http://hub.browserstack.com/wd/hub',
	specs : [ 'spec.js' ],
	// capabilities: {
	// Failed Angular Test In IE
	// 'browserName' : 'IE',
	// 'browser_version' : '8.0',
	// 'os' : 'Windows',
	// 'os_version' : '7',
	// 'resolution' : '1024x768',

	// Successful Angular Test in Chrome
	// 'browserName' : 'Chrome',
	// 'browser_version' : '51.0',
	// 'os' : 'Windows',
	// 'os_version' : '10',
	// 'resolution' : '1920x1200',
	//	  
	// 'browserstack.user' : process.env.USERNAME,
	// 'browserstack.key' : process.env.AUTOMATE_KEY,
	// 'browserstack.debug' : 'true'
	// }
	multiCapabilities : [ {
		'browserName' : 'Firefox',
		'browser_version' : '46.0',
		'os' : 'OS X',
		'os_version' : 'El Capitan',
		'resolution' : '1600x1200',
		'browserstack.user' : process.env.USERNAME,
		'browserstack.key' : process.env.AUTOMATE_KEY,
		'browserstack.debug' : 'true'
	}, {
		'browserName' : 'Chrome',
		'browser_version' : '51.0',
		'os' : 'Windows',
		'os_version' : '10',
		'resolution' : '1920x1200',
		'browserstack.user' : process.env.USERNAME,
		'browserstack.key' : process.env.AUTOMATE_KEY,
		'browserstack.debug' : 'true'
	}, {
		'browserName' : 'IE',
		'browser_version' : '8.0',
		'os' : 'Windows',
		'os_version' : '7',
		'resolution' : '1024x768',
		'browserstack.user' : process.env.USERNAME,
		'browserstack.key' : process.env.AUTOMATE_KEY,
		'browserstack.debug' : 'true'
	} ]
}