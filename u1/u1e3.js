// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e3.md / Enunciat disponible a u1e3.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

import { Validator } from './u1e1.js';

export class NumberValidator extends Validator {

    #min;
    #max;

    constructor(fieldName = 'none', value = '', min = undefined, max = undefined) {
        super(fieldName === null ? 'none' : fieldName, value);
        this.#min = min;
        this.#max = max;
    }

    get min() { return this.#min; }
    set min(val) { this.#min = val; }

    get max() { return this.#max; }
    set max(val) { this.#max = val; }

    checkNumber() {
        if (typeof this.value !== 'number' || isNaN(this.value) || !isFinite(this.value)) {
            return `ERROR_NUMBER. ${this.field} NO es de tipo número o un número válido ${this.value}.`;
        }
        if (this.#min !== undefined && this.value < this.#min) {
            return `ERROR_MIN. ${this.field} no alcanza el valor máximo asignado.`;
        }
        if (this.#max !== undefined && this.value > this.#max) {
            return `ERROR_MAX. ${this.field} supera el valor máximo asignado.`;
        }
        return true;
    }

    isValid() {
        if (this.isEmpty()) {
            if (this.required) {
                return `ERROR_REQUIRED. ${this.field} no puede ser vacío si es obligatorio.`;
            }
            return true;
        }
        return this.checkNumber();
    }
}
