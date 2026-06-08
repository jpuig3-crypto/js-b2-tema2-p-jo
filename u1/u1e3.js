// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

import { Validator } from "./u1e1.js";

class NumberValidator extends Validator {
    #min;
    #max;

    constructor(fieldName, value, min = undefined, max = undefined) {
        const finalFieldName = fieldName ? fieldName : 'none';

        super(finalFieldName, value);

        this.#min = min;
        this.#max = max;
    }

    checkNumber() {
        const val = this.value;

        if (typeof val !== 'number' || isNaN(val)) {
            return `ERROR_NUMBER. ${this.field} NO es de tipo numero o un numero valido ${val}.`;
        }

        if (this.#max !== undefined && val > this.#max) {
            return `ERROR_MAX. ${this.field} supera el valor maximo asignado.`;
        }

        if (this.#min !== undefined && val < this.#min) {
            return `ERROR_MIN. ${this.field} no alcanza el valor maximo asignado.`;
        }

        return true;
    }
}

export { NumericValidator };