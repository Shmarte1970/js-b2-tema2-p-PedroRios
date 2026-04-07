// T2. Trabajo experto con clases
// U3. Clases abstractas
// Enunciado disponible en u3e2.md / Enunciat disponible a u3e2.md



import { Shape } from './u3e1.js';

export class Rectangle extends Shape {

    #base;
    #height;

    constructor(base = 0, height = 0) {
        super();
        this.nSides = 4;
        this.#base = base;
        this.#height = height;
    }

    get base() { return this.#base; }
    set base(val) { this.#base = val; }

    get height() { return this.#height; }
    set height(val) { this.#height = val; }

    getArea() {
        return this.#base * this.#height;
    }

    isSquare() {
        return this.#base === this.#height;
    }
}
