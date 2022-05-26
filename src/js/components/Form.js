import Component from "../libs/Component.js";

const htmlFieldTags = ['input', 'select', 'textarea'];

class Form extends Component {
    className;
    onSubmit;
    fields;

    constructor({ content: children, className, onSubmit }) {
        super(document.createElement('form'));
        if (children !== undefined) {
            const isComponent = Component.isInstance(children);
            const isArrayOfComponents = Component.isArrayOfInstances(children);
            if (!(isComponent || isArrayOfComponents)) {
                throw new Error('Children should be of prototype Component');
            }
            this.children = children;
            this.className = className;
        }
        this.onSubmit = onSubmit;
        this.init();
    }

    get values() {
        return this.fields.reduce((prevValues, field) => ({
            ...prevValues,
            [field.name]: field.value
        }), {})
    }

    clearInputs = () => {
        this.fields.map((input) => {
            input.value = ''
        })
    }

    init() {
        this.htmlElement.className = this.className;
        this.setChildrenComponents(...this.children);
        this.fields = Array.from(this.htmlElement.querySelectorAll(htmlFieldTags.join(',')));
        this.htmlElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.onSubmit(this.values);
            this.clearInputs();
        });
    }
}

export default Form;