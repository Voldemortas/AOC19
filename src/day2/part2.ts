//part 2
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
function permutate(
    first: number,
    second: number,
    list: number[],
    required: number
): boolean {
    let index = 0
    list[1] = first
    list[2] = second
    while (list[index] != 99) {
        list[values[index + 3]] = action(
            list[index],
            list[values[index + 1]],
            list[values[index + 2]]
        )
        index += 4
    }
    return list[0] == required
}
const { commas } = readFromFile('input.txt')
const required = 19690720
let values = commas.map((e) => parseInt(e))
for (let i = 0; i <= values.length; i++) {
    for (let j = 0; j <= values.length; j++) {
        if (permutate(i, j, [...values], required)) {
            console.log(i * 100 + j)
            i = values.length + 1
            j = i
        }
    }
}
