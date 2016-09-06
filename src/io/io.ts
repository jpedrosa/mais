
import {File} from "./file";


export class IO {

    static read(filePath: string): string {
        return File.read(filePath);
    }

}
