// T2. Trabajo experto con clases
// U2. Polimorfismo
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

import { EmailValidator } from './u1e2.js';
import { NumericValidator } from './u1e3.js';

class FormValidator {
    #fieldList;

    constructor() {
        this.#fieldList = [];
    }

    addField(validatorObject) {
        const isEmail = validatorObject instanceof EmailValidator;
        const isNumber = validatorObject instanceof NumericValidator;

        if(!isEmail && !isNumber) {
            return "ERROR_TYPE. The object's type to be added is not supported.";
        }

        const duplicateExists = this.#fieldList.some(item => item.field === validatorObject.field);

        if (duplicateExists) {
           return `ERROR_DUPLICATE. Ya existe un campo con el nombre ${validatorObject.field}`;
        }

        this.#fieldList.push(validatorObject);
        return true;
    }

    removeField(fieldName) {
        this.#fieldList = this.#fieldList.filter(item => item.field !== fieldName);
    }

    nFields() {
        return this.#fieldList.length;
    }

    validate() {
        if (this.#fieldList.length === 0) {
            return "ERROR_EMPTY. El formulario no dispone de campos a validar";
        }

        for (let validator of this.#fieldList.length === 0) {
            const result = validator.isValid();

            if (result !== true) {
                return result;
            }
        }

        return true;
    }
}

export { FormValidator };