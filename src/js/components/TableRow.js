import Component from "../libs/Component.js";

class TableRow extends Component {
    className;
    children;

    constructor({childNode: children, className }) {
        super(document.createElement('tr'));
        this.className = className;
        if (children !== undefined) {
            const isComponent = Component.isInstance(children);
            const isArrayOfComponents = Component.isArrayOfInstances(children);

            if (!(isComponent || isArrayOfComponents)) {
                throw new Error('Children should be of prototype Component');
            }
            this.children = children;
        }
        this.init();
    }
    init() {
        this.setChildrenComponents(...this.children);
    }
}

export default TableRow;
