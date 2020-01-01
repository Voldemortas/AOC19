import * as fs from 'fs'
export default function readFromFile(
    fileName: string
): { lines: string[]; chars: string[]; commas: string[] } {
    let contents = fs.readFileSync(fileName, 'utf8')
    let lines = contents.split('\n')
    let chars = contents.split('')
    let commas = contents.split(',')
    lines.pop()
    chars.pop()
    //commas.pop()
    return { lines, chars, commas }
}
