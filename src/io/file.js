//const fs = require('fs');
"use strict";
const fs = require("fs");
class File {
    constructor(path) {
        this._path = path;
        this._fd = fs.openSync(path, "r+");
    }
    read() {
        return fs.readFileSync(this._fd, 'utf8');
    }
    static read(path) {
        return fs.readFileSync(path, 'utf8');
    }
}
exports.File = File;
