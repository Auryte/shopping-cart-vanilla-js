import Component from "../libs/Component.js";

const types = ['text', 'number'];

class Input extends Component {
    type;
    id;
    name;

    constructor({ type, id, name }) {
        super(document.createElement('input'));
        if (!types.includes(type)) {
            throw new Error('Incorrect input type');
        }
        this.type = type;
        this.id = id;
        this.name = name;
        this.init();
    }

    init() {
        this.htmlElement.setAttribute('type', this.type);
        this.htmlElement.setAttribute('id', this.id);
        this.htmlElement.setAttribute('name', this.name);
    }
}

export default Input;
