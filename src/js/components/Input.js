import Component from "../libs/Component.js";

const types = ['text', 'number'];

class Input extends Component {
    type;
    id;

    constructor({type, id}) {
        super(document.createElement('input'));
        if (!types.includes(type)) {
            throw new Error('Incorrrect input type');
        }
        this.type = type;
        this.id = id;
        this.init();
    }

    init() {
        this.htmlElement.setAttribute('type', this.type);
        this.htmlElement.setAttribute('id', this.id);
    }
}

export default Input;
