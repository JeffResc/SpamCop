var https = require('https');

module.exports = {
    lookup: function(ip, cb) {
        var bytes = ip.split(".");
        https.get('http://' + bytes[3] + '.' + bytes[2] + '.' + bytes[1] + '.' + bytes[0] + '.bl.spamcop.net', function (response) {
        }).on('error', function(error) {
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