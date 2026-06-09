// T2. Trabajo experto con clases
// U3. Clases abstractas
// Enunciado disponible en u3e2.md / Enunciat disponible a u3e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

import { shape } from './u3e1.js';

class Rectangle extends Shape {
    #base;
    #height;

    constructor(base = 0, height = 0) {
        super(2);

        this.#base = base;
        this.#height = height;
    }

    get base() {
        return this.#base;
    }
    set base(value) {
        this.#height = value;
    }

    get height() {
        return this.#height;
    }
    set height(value) {
        this.#height = value;
    }

    getArea() {
        return this.#base * this.#height;
    }

    isSquare() {
        return this.#base === this.#height && this.#base > 0;
    }
}

export { Rectangle };