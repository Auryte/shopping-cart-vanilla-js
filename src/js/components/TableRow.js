import Component from "../libs/Component.js";

class TableRow extends Component {
    className;
    childNode;

    constructor({childNode, className}) {
        super(document.createElement('tr'));
        this.className = className;
        if (childNode !== undefined) {
            this.isComponent = childNode instanceof Component;
            this.isArrayOfComponents = childNode instanceof Array && childNode.every(x => x instanceof Component);

            if (!(this.isComponent || this.isArrayOfComponents)) {
                throw new Error('Children should be of prototype Node');
            }
            this.childNode = childNode;
            
        }
        this.init();
    }
    init() {
        this.htmlElement.className = this.className;
        if (this.isArrayOfComponents) {
            this.childNode.map(child => this.htmlElement.append(child.htmlElement));
        } else {
            this.htmlElement.appendChild(this.childNode.htmlElement);
        }
    }
}
export default TableRow;
