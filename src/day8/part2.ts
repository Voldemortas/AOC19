//part 2
import readFromFile from '../read'
const { chars } = readFromFile('input.txt')
let colours = chars.map((char) => +char)
const width = 25
const height = 6
let layers: number[][] = []
for (let i = 0; i < colours.length; i++) {
    if (i % (height * width) == 0) {
        layers.push([])
    }
    layers[layers.length - 1].push(colours[i])
}
let image: number[][] = new Array(height)
    .fill(0)
    .map((e) => new Array(width).fill(2))
layers.forEach((layer) => {
    layer.forEach((pixel, j) => {
        let row = Math.floor(j / width)
        let col = j % width
        if (image[row][col] == 2) {
            image[row][col] = pixel
        }
    })
})
console.log(
    image
        .map((e) => e.join(''))
        .join('\n')
        .replace(/0/g, ' ')
)
