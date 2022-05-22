import WrapperComponent from "../libs/WrapperComponent.js";

const types =['thead', 'tbody'];

class TableElement extends WrapperComponent {
    type;
    attrId;

    constructor(type, childNode, attrId) {
        super(document.createElement(type), childNode);
        this.attrId = attrId;
        if (!types.includes(type)) {
            throw new Error('Incorrect table element');
        }
        if (!(attrId === undefined)) this.init();
    }
    init() {
        this.htmlElement.setAttribute('id', this.attrId);
    }
}
export default TableElement;
