// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Validator {
    #field;
    #value;
    #requiered;
    
    constructor(fieldName = '', value = '') {
        this.#field = fieldName;
        this.#value = value;
        this.#requiered = false;
    }

    get field() {
        return this.#field;
    }
    set field(name) {
        this.#field = name;
    }

    get value() {
        return this.#value;
    }
    set value(val) {
        this.#value = val;
    }

    get requiered() {
        return this.#requiered;
    }
    set requiered(isRequiered) {
        this.#requiered = isRequiered;
    }

    isEmpty() {
        return this.#value === undefined || this.#value === null || this.#value === '';
    }
    
    isValid() {
        if (!this.isEmpty()) {
            return true;
        }
        if (!this.#requiered) {
            return true;
        }
        return false;
    }
}

export { Validator };