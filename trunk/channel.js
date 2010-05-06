// Channel, aka Observable. In our system we're using it as a (usually
// public) property, not a base class.

//     Copyright ⓒ 2010 Ångströ, Inc.

//     This file is part of SearchMyStuff.

//     SearchMyStuff is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     SearchMyStuff is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with SearchMyStuff.  If not, see <http://www.gnu.org/licenses/>.

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
