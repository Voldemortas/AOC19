function GCD(a: number, b: number): number {
    a = Math.abs(a)
    b = Math.abs(b)
    if (a == 0) {
        return b
    }
    if (b == 0) {
        return a
    }
    let max = 1
    for (let i = 2; i <= Math.min(a, b); i++) {
        if (a % i == 0 && b % i == 0) {
            max = i
        }
    }
    return max
}
export function fraction(a: number, b: number): string {
    let gcd = GCD(a, b)
    return `${a / gcd}/${b / gcd}`
}
function sin(a: number, b: number): number {
    let gcd = GCD(a, b)
    a /= gcd
    b /= gcd
    return b / Math.sqrt(a ** 2 + b ** 2)
}
function cos(a: number, b: number): number {
    return sin(b, a)
}
export function degrees(a: number, b: number): number {
    let cosine = (180 / Math.PI) * Math.acos(cos(a, b))
    let sine = (180 / Math.PI) * Math.asin(sin(a, b))
    return getAngle([sine, threeSixty(180 - sine)], [cosine, 360 - cosine])
}
export function threeSixty(size: number): number {
    return (size + 360 * 2) % 360
}
function getAngle(cosine: [number, number], sine: [number, number]): number {
    let min: { value: number; cos: number }[] = []
    cosine.forEach((one) => {
        min.push(
            ...sine.map((two) => {
                return {
                    value: threeSixty(Math.abs(two - one)),
                    cos: threeSixty(one),
                }
            })
        )
    })
    return min.sort((a, b) => a.value - b.value)[0].cos
}
