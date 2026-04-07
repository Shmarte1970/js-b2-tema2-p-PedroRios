// T2. Trabajo experto con clases
// U4. Interfaces
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md



export const IPrintable = {
    print: function() {}
};

Object.defineProperty(Object.prototype, 'implements', {
    enumerable: false,
    value: function(interf) {
        for (const method in interf) {
            if (typeof this[method] !== 'function') {
                return false;
            }
        }
        return true;
    }
});

export class Message {

    text;

    constructor(text) {
        this.text = text;
        if (!this.implements(IPrintable)) {
            throw new Error('ERROR_IMPLEMENTS. This class doesn\'t implements the interface IPrintable.');
        }
    }

    print() {
        console.log(this.text);
    }
}
