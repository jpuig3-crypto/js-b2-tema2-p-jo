// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

import { Validator} from "./u1e1.js";

class EmailValidator extends Validator {

    constructor(fieldName, value) {
        const finalFieldName = fieldName ? fieldName : "none";

        super(finalFieldName, value);
    }

    checkEmailAddress() {
        const email = this.value;

        const emailRegex = /^[^@]+@[^@.]{2,}\.[^@.]{2,}$/;

        if (emailRegex.test(email)) {
            return true;
        } else {
            return `ERROR_EMAIL. ${this.fieldName} NO es una direccion de correo valida.`;
        }
    }

    isValid() {
        if (this.requiered && this.isEmpty()) {
            return `ERROR_REQUIRED. ${this.field} no puede ser vacio si es obligatorio.`;
        }

        if (!this.isEmpty()) {
            const emailCheck = this.checkEmailAddress();
            if (emailCheck !== true) {
                return emailCheck;
            }
        }

        return true;
    }
}

export { EmailValidator };