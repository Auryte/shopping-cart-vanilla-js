import Component from "../libs/Component.js";

class Table extends Component {
    id;

    constructor({ childNode: children, id }) {
        super(document.createElement('table'));
        this.children = children;
        this.id = id;
        
        this.init();
    }
init() {
    this.htmlElement.setAttribute('id', this.id);
    this.setChildrenComponents(...this.children);
}
}
export default Table;