type ValueOrArray<T> = Array<ValueOrArray<T> | T>

export default class Tree {
    private parent: Tree | null
    private children: Tree[]
    private name: string
    constructor(name: string, parent: Tree | null = null) {
        this.name = name
        this.parent = parent
        this.children = []
    }
    public Add(parent: string, name: string): boolean {
        if (this.name == parent) {
            this.RealAdd(name)
            return true
        }
        if (this.getChildren().findIndex((child) => child == parent) == -1) {
            return false
        }
        return this.children
            .map((child) => child.Add(parent, name))
            .reduce((a, b) => a || b, false)
    }
    private RealAdd(name: string): void {
        this.children.push(new Tree(name, this))
    }
    private getParents(): string[] {
        let current: Tree | null = this
        let answer: string[] = []
        while (current.parent != null) {
            answer.push(current.parent.name)
            current = current.parent
        }
        return answer
    }
    private getChildren(): string[] {
        let first = this.children.map((child) => child.name) //top level child names
        return this.children
            .map((child) => child.getChildren())
            .reduce((a, b) => {
                a.push(...b)
                return a
            }, first)
    }
    public Size(start = 0): number {
        return this.children.reduce((a, b) => a + b.Size(start + 1), start)
    }
    public getCommon(a: string, b: string): string {
        //we already assume such node exists
        let current: Tree = this
        while (true) {
            let temp = current.children.filter((child) => {
                let leaf = child.getChildren()
                return leaf.includes(a) && leaf.includes(b)
            })
            if (temp.length == 1) {
                current = temp[0]
            } else {
                return current.name
            }
        }
    }
    public getDistance(name: string, distance = 0): number {
        if (this.name == name) {
            return distance
        }
        if (!this.getChildren().includes(name)) {
            return 0
        }
        return Math.max(
            ...this.children.map((child) =>
                child.getDistance(name, distance + 1)
            )
        )
    }
}
