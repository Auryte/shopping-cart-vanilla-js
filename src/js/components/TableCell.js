import Component from "../libs/Component.js";

const types = ['th', 'td'];

class TableCell extends Component {

    constructor({ className, content }, {type = 'td'}) {
        if (!types.includes(type)) {
            throw new Error('Incorrect table element');
        }
        super(document.createElement(type), { className, content });

    }

    updateOnPropsChange() {
        const { className, content } = this.props;

        this.htmlElement.innerHTML = '';
        this.htmlElement.append(content instanceof Component ? content.htmlElement : content);
        if (className) this.htmlElement.className = className;
    }

}
export default TableCell;
