// Channel, aka Observable. In our system we're using it as a (usually
// public) property, not a base class.
function Channel() {
    this._observers = [];
}
Channel.prototype = {
    on_change: function(observer) {
        this._observers.push(observer);
    },

    remove_observer: function(observer) {
        var index = array_index_of(this._observers, observer);
        if (index === null) return;
        this._observers.splice(index, 1);
    },

    changed: function() {
        for (var ii = 0; ii < this._observers.length; ii++) {
            this._observers[ii]();
        }
    }
}
