import Component from "../libs/Component.js";

const types = ['thead', 'tbody'];

class TableElement extends Component {
    type;
    id;

    constructor( { childNode: children, type = 'tbody', id }) {
        if (!types.includes(type)) {
            throw new Error('Incorrect table element');
        }
        super(document.createElement(type));
        if (children !== undefined) {
            const isComponent = Component.isInstance(children);
            const isArrayOfComponents = Component.isArrayOfInstances(children);
            if (!(isComponent || isArrayOfComponents)) {
                throw new Error('Children should be of prototype Component');
            }
            this.children = children;
            this.id = id;
            this.init();
        }
    }
    init() {
        this.htmlElement.setAttribute('id', this.id);
        this.setChildrenComponents(...this.children)
    }
    // updateOnPropsChange() {
    //     const { content } = this.props;
    //     this.htmlElement.innerHTML = '';
    //     this.htmlElement.append(content instanceof Component ? content.htmlElement : content);
    // }
}
export default TableElement;
