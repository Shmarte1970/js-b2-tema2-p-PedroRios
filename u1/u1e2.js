// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e2.md / Enunciat disponible a u1e2.md



import { Validator } from './u1e1.js';

export class EmailValidator extends Validator {

    constructor(fieldName = 'none', value = '') {
        super(fieldName === null ? 'none' : fieldName, value);
        if (fieldName === null || fieldName === undefined) {
            this.field = 'none';
        }
    }

    checkEmailAddress() {
        const parts = this.value.split('@');

        if (parts.length !== 2) {
            return `ERROR_EMAIL. ${this.field} NO es una dirección de correo válida.`;
        }

        const [local, domain] = parts;

        if (local.length < 1) {
            return `ERROR_EMAIL. ${this.field} NO es una dirección de correo válida.`;
        }

        const dotIndex = domain.lastIndexOf('.');
        if (dotIndex === -1) {
            return `ERROR_EMAIL. ${this.field} NO es una dirección de correo válida.`;
        }

        const domainName = domain.substring(0, dotIndex);
        const extension = domain.substring(dotIndex + 1);

        if (domainName.length < 2 || extension.length < 2) {
            return `ERROR_EMAIL. ${this.field} NO es una dirección de correo válida.`;
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
        return this.checkEmailAddress();
    }
}
