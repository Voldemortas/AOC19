//part 1
import readFromFile from '../read'
import Grid from './Grid'
let grid = new Grid()
const { lines } = readFromFile('input.txt')
var data: [string, number][][]
data = lines.map((line) =>
    line.split(',').map((commas) => {
        let string = commas.split('')
        return [string.shift() || '', parseInt(string.join('')) || 0]
    })
)
var intersections: number[]
intersections = []
data[0].forEach((instruction) => {
    for (let i = 0; i < instruction[1]; i++) {
        grid.move(instruction[0])
        grid.mark()
    }
})
grid.reset()
data[1].forEach((instruction) => {
    for (let i = 0; i < instruction[1]; i++) {
        grid.move(instruction[0])
        if (grid.isMarked()) {
            intersections.push(
                Math.abs(grid.getSteps() + grid.getFormerSteps())
            )
        }
    }
})

console.log(Math.min(...intersections))
