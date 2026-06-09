// T2. Trabajo experto con clases
// U4. Interfaces
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

const IPrintable = {
    print: function() {}
};

Object.defineProperty(Object.prototype, 'implements', {
    value: function (interf) {
        for (let method in interf) {
            if (typeof interf[method] === 'function') {
                if (typeof this[method] !== 'function') {
                    return false;
                }
            }
        }
        return true;
    },
    enumerable: false,
    writable: true,
    configurable: true
});

class Message {
    text;

    constructor(textString) {
        this.text = textString;

        if (!this.implements(IPrintable)) {
            throw new Error('ERROR_IMPLEMENTS. This class doesnt implements the interface IPrintable.');
        }
    }

    print() {
        console.log(this.text);
    }
}

export { IPrintable, Message };