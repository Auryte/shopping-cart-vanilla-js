import WrapperComponent from "../libs/WrapperComponent.js";

class TableRow extends WrapperComponent {
    attrClass;

    constructor(childNode, attrClass) {
        super(document.createElement('tr'), childNode);
        this.attrClass = attrClass;
        if (!(attrClass === undefined)) this.init();
    }
    init() {
        this.htmlElement.className = this.attrClass;
    }
}
export default TableRow;
