//part 2
import readFromFile from '../read'
import { threeSixty, degrees } from './GCD'
const { lines } = readFromFile('input.txt')
let asteroids: [number, number][] = []
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] == '#') {
            asteroids.push([j, i])
        }
    }
}
let angles: Map<number, number[][]>[] = []
asteroids.forEach((asteroid1, index) => {
    angles.push(new Map<number, number[][]>())
    asteroids.forEach((asteroid2) => {
        if (asteroid1[0] == asteroid2[0] && asteroid1[1] == asteroid2[1]) {
            return
        }
        let parameters: [number, number] = [
            asteroid2[0] - asteroid1[0],
            asteroid1[1] - asteroid2[1],
        ]
        let size = degrees(...parameters)
        let temp = angles[index].has(size)
            ? [...angles[index].get(size)!, parameters]
            : [parameters]
        angles[index].set(size, temp)
    })
})
const max = Math.max(...angles.map((e) => e.size))
const index = angles.findIndex((e) => e.size == max)
let asteroid3 = [...angles[index].entries()]
    .map((e): [number, number[][]] => [threeSixty(e[0] - 90), e[1]])
    .sort((a, b) => b[0] - a[0])
asteroid3 = [asteroid3.pop()!, ...asteroid3].map((e) => [
    e[0],
    e[1].sort(
        (a, b) =>
            Math.abs(a[0]) + Math.abs(a[1]) - Math.abs(b[0]) - Math.abs(b[1])
    ),
])
let answer: number[] = []
for (let i = 0; i < 200; i++) {
    answer = asteroid3[i][1].shift()!
}
console.log(
    (answer[0] + asteroids[index][0]) * 100 + asteroids[index][1] - answer[1]
)
