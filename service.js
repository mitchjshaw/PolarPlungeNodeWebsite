var Service = require('node-windows').Service;

var svc = new Service({
	name: "aohpolarplungewebserver",
	description: "Polar Plunge Web Server Auto Start",
	script: "C:\\repos\\PolarPlungeNodeWebsite\\app.js"
});

svc.on('install', function() {
	svc.start();
});

svc.install();