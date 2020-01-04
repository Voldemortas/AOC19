//part 1
import readFromFile from '../read'
const { chars } = readFromFile('input.txt')
let colours = chars.map((char) => +char)
const witdth = 25
const height = 6
let layers: number[][] = []
for (let i = 0; i < colours.length; i++) {
    if (i % (height * witdth) == 0) {
        layers.push([])
    }
    layers[layers.length - 1].push(colours[i])
}
let smallest = layers.sort(
    (a, b) =>
        a.filter((value) => value == 0).length -
        b.filter((value) => value == 0).length
)
console.log(
    smallest[0].filter((value) => value == 1).length *
        smallest[0].filter((value) => value == 2).length
)
