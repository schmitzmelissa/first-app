
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter { // extends allows all functionality from EventEmitter
    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event with the name of the event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;    // export Logger class instead of log function
