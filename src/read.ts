import * as fs from 'fs'
export default function readFromFile(fileName: string): string {
    return fs.readFileSync(fileName, 'utf8')
}
