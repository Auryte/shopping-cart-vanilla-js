import Component from "../libs/Component.js";

const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

class Heading extends Component {
    type;
    innerText;

    constructor({ type, innerText }) {
        if (!types.includes(type)) {
            throw new Error('Incorrrect heading size');
        }
        super(document.createElement(type));
        this.innerText = innerText;
        this.init();
    }

    init() {
        this.htmlElement.innerText = this.innerText;
    }

    updateOnPropsChange() {
        this.htmlElement.innerText = this.props.innerText;
    }
}

export default Heading;
