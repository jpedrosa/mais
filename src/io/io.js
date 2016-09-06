"use strict";
const file_1 = require("./file");
class IO {
    static read(filePath) {
        return file_1.File.read(filePath);
    }
}
exports.IO = IO;
