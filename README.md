[![NPM](https://nodei.co/npm/spamcop.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/spamcop/)

# SpamCop
SpamCop IP Address Lookup in Node.js

Example Lookup:

First run ```npm install spamcop``` to install the SpamCop package to your system.

```javascript
var SpamCop = require('spamcop');

SpamCop.lookup('8.8.8.8', function(res) {
	console.log(res); //Returns false since 8.8.8.8 is not listed
});

SpamCop.lookup('212.227.94.244', function(res) {
	console.log(res); //Returns true since 212.227.94.244 is listed
});
```

[This Package Is Under The GPL-3.0 License](https://raw.githubusercontent.com/AlphaT3ch/SpamCop/master/LICENSE.txt)