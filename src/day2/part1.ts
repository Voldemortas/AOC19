//part 1
import readFromFile from '../read'
function action(id: number, a: number, b: number): number {
    if (id == 1) {
        return a + b
    }
    if (id == 2) {
        return a * b
    }
    throw 'Bad input'
}
const { commas } = readFromFile('input.txt')
let values = commas.map((e) => parseInt(e))
let index = 0
while (values[index] != 99) {
    values[values[index + 3]] = action(
        values[index],
        values[values[index + 1]],
        values[values[index + 2]]
    )
    index += 4
}
console.log(values[0])
