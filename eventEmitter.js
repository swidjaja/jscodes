// https://nodejs.org/api/events.html#events_class_events_eventemitter
// mwiller@box.com

/*

var e = new EventEmitter();
e.on('hungry', function eat(food, drink) {
    console.log('Ate some ' + food);
    console.log('Drank some ' + drink);
});
e.on('hungry', function x() {
    e.removeAllListeners('hungry');
});
e.on('hungry', function eat2() {
    console.log('Eat some more');
});

...

e.emit('hungry', 'apples', 'water'); // eat() should be called

*/

function EventEmitter(){
    this.evtHandler = {};
};

EventEmitter.prototype.on = function (evtName, callback) {

    if (!this.evtHandler[evtName]) {
        this.evtHandler[evtName] = [];
    }
    this.evtHandler[evtName].push(callback);
};

EventEmitter.prototype.emit = function() {
    var evtName = arguments[0];
    var params = Array.prototype.slice.call(arguments, 1);
    var callbacks = this.evtHandler[evtName] || [];
    callbacks.forEach(function (callback) {
        callback.apply(this, params);
    }.bind(this));
};

EventEmitter.prototype.removeAllListeners = function(evtName) {
    delete this.evtHandler[evtName];
};