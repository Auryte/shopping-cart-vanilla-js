import WrapperComponent from "../libs/WrapperComponent.js";

class Form extends WrapperComponent {
    onSubmit;
    attrId;
    findInputElements;

    constructor(childNode, attrId, onSubmit) {
        super(document.createElement('form'), childNode);
        this.attrId = attrId;
        this.onSubmit = onSubmit;
        this.childNode = childNode;
        this.findInputElements = this.childNode.filter(element => element.tagName == 'INPUT');
        this.init();
    }

    clearInputs = () => {
        this.findInputElements.map((input) => {
            input.value = ''
        })
    }

    init() {
        this.htmlElement.setAttribute("id", this.attrId);
        this.htmlElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.onSubmit(this.findInputElements.map(el => el.value));
            this.clearInputs();
        });
    }
}

export default Form;