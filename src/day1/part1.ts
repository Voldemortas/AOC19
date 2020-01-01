//part 1
import readFromFile from '../read'
const { lines } = readFromFile('input.txt')
console.log(
    lines.map((e) => Math.floor(parseInt(e) / 3 - 2)).reduce((a, b) => a + b, 0)
)
