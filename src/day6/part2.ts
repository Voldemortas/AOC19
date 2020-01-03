//part 1
import readFromFile from '../read'
import Tree from './Tree'
const { lines } = readFromFile('input.txt')
let orbits = lines.map((line) => line.split(')'))
let myTree = new Tree('COM')
while (orbits.length > 0) {
    for (let i = 0; i < orbits.length; i++) {
        if (myTree.Add(orbits[i][0], orbits[i][1])) {
            orbits.splice(i, 1)
        }
    }
}
console.log(
    myTree.getDistance('YOU') +
        myTree.getDistance('SAN') -
        2 * myTree.getDistance(myTree.getCommon('YOU', 'SAN')) -
        2
)
