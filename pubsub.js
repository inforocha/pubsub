var events = {
    events: {},
    on: function(eventName, fn) {
        if(typeof fn === 'function') {
            this.events[eventName] = [];
            this.events[eventName].push(fn);
        }
    },
    off: function(eventName, fn) {
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {}
                this.events[eventName].splice(i,1);
            }
        }
    },
    emit: function(eventName, data) {
        var result = false;
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                result = fn(data);
            });
        }
        return result;
    }
};