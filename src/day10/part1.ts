//part 1
import readFromFile from '../read'
import { fraction } from './GCD'
const { lines } = readFromFile('input.txt')
let asteroids: [number, number][] = []
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] == '#') {
            asteroids.push([j, i])
        }
    }
}
let angles: Set<string>[] = []
asteroids.forEach((asteroid1, index) => {
    angles.push(new Set<string>())
    asteroids.forEach((asteroid2) => {
        if (asteroid1[0] == asteroid2[0] && asteroid1[1] == asteroid2[1]) {
            return
        }
        angles[index].add(
            fraction(asteroid1[0] - asteroid2[0], asteroid1[1] - asteroid2[1])
        )
    })
})
console.log(Math.max(...angles.map((angle) => angle.size)))
