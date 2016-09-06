
//const fs = require('fs');

import * as fs from "fs";


declare module "fs" {

    export function readFileSync(filename: number, encoding: string): string;

}


export class File {

    _path: string;
    _fd: number;

    constructor(path: string) {
        this._path = path;
        this._fd = fs.openSync(path, "r+");
    }

    read(): string {
        return fs.readFileSync(this._fd, 'utf8');
    }

    static read(path: string): string {
       return fs.readFileSync(path, 'utf8');
    }  
}
