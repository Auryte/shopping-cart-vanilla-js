import Component from "../libs/Component.js";

const types = ['thead', 'tbody'];

class TableElement extends Component {
    type;
    id;

    constructor({ content }, {type = 'tbody', id}) {
        if (!types.includes(type)) {
            throw new Error('Incorrect table element');
        }
        super(document.createElement(type), { content });
        this.id = id;
        this.init();
    }
    init() {
        this.htmlElement.setAttribute('id', this.id);
    }
    updateOnPropsChange() {
        const { content } = this.props;
        this.htmlElement.innerHTML = '';
        this.htmlElement.append(content instanceof Component ? content.htmlElement : content);
    }
}
export default TableElement;
