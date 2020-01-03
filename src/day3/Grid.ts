export default class Grid {
    private position: { x: number; y: number }
    private grid: Map<string, number>
    private steps: number
    constructor() {
        this.position = { x: 0, y: 0 }
        this.grid = new Map()
        this.steps = 0
    }
    getSteps(): number {
        return this.steps
    }
    move(direction: string): void {
        let movement = { x: 0, y: 0 }
        if (direction == 'R') {
            movement.x++
        }
        if (direction == 'L') {
            movement.x--
        }
        if (direction == 'U') {
            movement.y++
        }
        if (direction == 'D') {
            movement.y--
        }
        this.position.x += movement.x
        this.position.y += movement.y
        this.steps++
    }
    mark(): void {
        if (!this.isMarked()) {
            this.grid.set(JSON.stringify(this.position), this.steps)
        }
    }
    isMarked(): boolean {
        return this.grid.has(JSON.stringify(this.position))
    }
    reset(): void {
        this.position = { x: 0, y: 0 }
        this.steps = 0
    }
    getFormerSteps(): number {
        return this.grid.get(JSON.stringify(this.position)) || 0
    }
    getPosition(): { x: number; y: number } {
        return this.position
    }
}
