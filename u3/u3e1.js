// T2. Trabajo experto con clases
// U3. Clases abstractas
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md



export class Shape {

    nSides;

    constructor() {
        if (new.target === Shape) {
            throw new Error('ERROR_ABSTRACT. Abstract class Shape cannot be directly instantiated.');
        }
    }

    getArea() {
        throw new Error('ERROR_ABSTRACT_METHOD. Method "getArea()" should be implemented by child classes of "Shape".');
    }
}
