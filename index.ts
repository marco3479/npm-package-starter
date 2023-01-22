
export function perignose(t: number, u: number, f: number) {
    console.debug('testing');
    return [t, u, f];
}

export function testing(t: number, u: number, f: number) {
    console.debug('testing');
    return [t, u, f];
}

type AddFunction = (a: number, b: number) => number

export const add: AddFunction = (a: number, b: number) => {
    return a + b
}