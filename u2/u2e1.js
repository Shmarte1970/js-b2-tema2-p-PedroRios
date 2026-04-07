// T2. Trabajo experto con clases
// U2. Polimorfismo
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md



import { EmailValidator } from '../u1/u1e2.js';
import { NumberValidator } from '../u1/u1e3.js';

export class FormValidator {

    #fieldList;

    constructor() {
        this.#fieldList = [];
    }

    addField(obj) {
        if (!(obj instanceof EmailValidator) && !(obj instanceof NumberValidator)) {
            return 'ERROR_TYPE. The object\'s type to be added is not supported.';
        }
        if (this.#fieldList.some(f => f.field === obj.field)) {
            return `ERROR_DUPLICATE. Ya existe un campo con el nombre ${obj.field}`;
        }
        this.#fieldList.push(obj);
        return true;
    }

    removeField(fieldName) {
        this.#fieldList = this.#fieldList.filter(f => f.field !== fieldName);
    }

    nFields() {
        return this.#fieldList.length;
    }

    validate() {
        if (this.#fieldList.length === 0) {
            return 'ERROR_EMPTY. El formulario no dispone de campos a validar';
        }
        for (const field of this.#fieldList) {
            const result = field.isValid();
            if (result !== true) {
                return result;
            }
        }
        return true;
    }
}
