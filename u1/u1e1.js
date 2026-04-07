// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md



export class Validator {
    #field;
    #value;
    #required;

    constructor(fieldName = '', value = '') {
        this.#field = fieldName;
        this.#value = value;
        this.#required = false;
    }

    get field() { return this.#field; }
    set field(val) { this.#field = val; }

    get value() { return this.#value; }
    set value(val) { this.#value = val; }

    get required() { return this.#required; }
    set required(val) { this.#required = val; }

    isEmpty() {
        return this.#value === '';
    }

    isValid() {
        return !this.isEmpty() || !this.#required;
    }
}
