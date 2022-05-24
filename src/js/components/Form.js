import Component from "../libs/Component.js";

class Form extends Component {
    onSubmit;
    id;
    findInputElements;

    constructor({ childNode, id, onSubmit }) {
        super(document.createElement('form'));
        if (childNode !== undefined) {
            this.isComponent = childNode instanceof Component;
            this.isArrayOfComponents = childNode instanceof Array && childNode.every(x => x instanceof Component);

            if (!(this.isComponent || this.isArrayOfComponents)) {
                throw new Error('Children should be of prototype Component');
            }
            this.childNode = childNode;
            this.id = id;

        }
        const findInputElements = this.childNode.filter(element => element.htmlElement.tagName == 'INPUT');
        this.findInputElements = findInputElements;
        this.onSubmit = onSubmit;
        this.init();
    }

    clearInputs = () => {
        this.findInputElements.map((input) => {
            input.htmlElement.value = ''
        })
    }

    init() {
        this.htmlElement.setAttribute("id", this.id);
        if (this.isArrayOfComponents) {
            this.childNode.map(child => this.htmlElement.append(child.htmlElement));
        } else {
            this.htmlElement.appendChild(this.childNode.htmlElement);
        }
        this.htmlElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.onSubmit(this.findInputElements.map(el => el.htmlElement.value));
            this.clearInputs();
        });
    }
}

export default Form;