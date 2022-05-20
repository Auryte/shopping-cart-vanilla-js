import WrapperComponent from "../libs/WrapperComponent.js";

const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

class Heading extends WrapperComponent {
    constructor(type, innerText) {
        super(
            document.createElement(type),
            innerText ? document.createTextNode(innerText) : undefined
        );

        if (!types.includes(type)) {
            throw new Error('Incorrrect heading size');
        }
    }
}

export default Heading;