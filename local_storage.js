//     Copyright ⓒ 2010 Ångströ, Inc.

//     This file is part of Disco Explorer.

//     Disco Explorer is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     Disco Explorer is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with Disco Explorer.  If not, see <http://www.gnu.org/licenses/>.

function LocalStorage(ls) { this._ls = ls; }
LocalStorage.prototype.get = function(name) { return this._ls[name]; }
LocalStorage.prototype.set = function(name, value) { this._ls[name] = value; }
LocalStorage.prototype.remove = function(name) { this._ls.removeItem(name); }

function GlobalStorage(gs) { this._gs = gs[location.hostname]; }
GlobalStorage.prototype.get = function(name) { 
    var entry = this._gs[name];
    if (!entry) return undefined;
    return entry.value; 
}
GlobalStorage.prototype.set = function(name, value) { this._gs[name] = value; }
GlobalStorage.prototype.remove = function(name) { delete this._gs[name]; }

// Find DOM storage object in FF2, FF3, FF3.5, Safari 4, etc.
function get_local_storage() {
    // in Google Chrome Mac Beta 4.0.223.11, localStorage is null
    // instead of undefined
    if (window.localStorage) return new LocalStorage(localStorage);
    if (window.globalStorage) return new GlobalStorage(globalStorage);
    return undefined;
}

