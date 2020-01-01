//part 2git
import readFromFile from '../read'
const { lines } = readFromFile('input.txt')
function calcFuel(fuel: number): number {
    let amount = Math.floor(fuel / 3) - 2
    if (amount <= 0) {
        return 0
    }
    return amount + calcFuel(amount)
}
console.log(
    lines
        .map((e) => Math.floor(parseInt(e)))
        .reduce((a, b) => a + calcFuel(b), 0)
)
