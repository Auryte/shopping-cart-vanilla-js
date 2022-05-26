import Component from "../libs/Component.js";

const types = ['th', 'td'];

class TableCell extends Component {

    constructor({ className, content, onChange }, { type = 'td' }) {
        if (!types.includes(type)) {
            throw new Error('Incorrect table element');
        }
        super(document.createElement(type), { className, content });
        this.onChange = onChange;
        this.init();
        this.updateOnPropsChange();
    }

    init() {
        if (this.onChange) {
            this.htmlElement.addEventListener('click', (e) => {
                this.htmlElement.setAttribute('contentEditable', 'true');
                e.target.focus();
            });
            this.htmlElement.addEventListener('blur', (e) => {
                this.onChange(e.target.innerHTML);
                this.htmlElement.removeAttribute('contentEditable');
            });
        };
    }

    updateOnPropsChange() {
        const { className, content } = this.props;
        this.htmlElement.innerHTML = '';
        this.htmlElement.append(content instanceof Component ? content.htmlElement : content);
        if (className) this.htmlElement.className = className;
    }

}
export default TableCell;
