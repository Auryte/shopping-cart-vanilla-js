import WrapperComponent from "../libs/WrapperComponent.js";

class Table extends WrapperComponent {
    attrId;

    constructor(childNode, attrId) {
        super(document.createElement('table'), childNode);
        this.attrId = attrId;
        this.init();
    }
    init() {
        this.htmlElement.setAttribute('id', this.attrId);
    }
}
export default Table;