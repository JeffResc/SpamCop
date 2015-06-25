var request = require('request');

module.exports = {
    lookup: function(ip, cb) {
        var bytes = ip.split(".");
        request('http://' + bytes[3] + '.' + bytes[2] + '.' + bytes[1] + '.' + bytes[0] + '.bl.spamcop.net', function (error, response, body) {
			if (error.syscall == 'getaddrinfo') {
                cb('false');
            } else if (error.syscall == 'connect') {
                cb('true');
            } else {
                cb('error')
            }
        });
    }
};