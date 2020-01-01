import * as fs from 'fs'
export default function readFromFile(fileName: string): [string[], string[]] {
    let contents = fs.readFileSync(fileName, 'utf8')
    let lines = contents.split('\n')
    let chars = contents.split('')
    lines.pop()
    chars.pop()
    return [lines, chars]
}
