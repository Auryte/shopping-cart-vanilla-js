import WrapperComponent from "../libs/WrapperComponent.js";

const types =['th', 'td'];

class TableCell extends WrapperComponent {
    type;
    attrClass;

    constructor(type, innerText, attrClass ) {
        super(document.createElement(type),
         document.createTextNode(innerText));
        this.attrClass = attrClass;
        if (!types.includes(type)) {
            throw new Error('Incorrect table element');
        }
        if (!(attrClass === undefined)) this.init();
    }
    init() {
        this.htmlElement.className = this.attrClass;
    }
}
export default TableCell;
