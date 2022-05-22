import Component from "../libs/Component.js";

const types = ['text', 'number'];

class Input extends Component {
    type;
    attrId;

    constructor(type, attrId) {
        super(document.createElement('input'));
        if (!types.includes(type)) {
            throw new Error('Incorrrect input type');
        }
        this.type = type;
        this.attrId = attrId;
        this.init();
    }

    init() {
        this.htmlElement.setAttribute('type', this.type);
        this.htmlElement.setAttribute('id', this.attrId);
    }
}

export default Input;
