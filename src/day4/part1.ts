//part 1
import readFromFile from '../read'
const { lines } = readFromFile('input.txt')
const start = +lines[0]
const finish = +lines[1]

function isNotDecreasing(input: string): boolean {
    let max = +input[0]
    for (let i = 1; i <= input.length; i++) {
        if (max > +input[i]) {
            return false
        }
        max = +input[i]
    }
    return true
}

function hasDouble(input: string): boolean {
    return /((\d)\2{1,})/.test(input)
}

let correct = 0
for (let i = start; i <= finish; i++) {
    let str = i.toString()
    if (isNotDecreasing(str) && hasDouble(str)) {
        correct++
    }
}

console.log(correct)
