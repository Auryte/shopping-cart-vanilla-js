import Component from "../libs/Component.js";

class Table extends Component {
    id;
    childNodes;

    constructor({childNodes, id}) {
        super(document.createElement('table'));
        this.id = id;
        this.childNodes = childNodes;
        this.init();
    }
    init() {
        this.htmlElement.setAttribute('id', this.id);
       if( this.childNodes instanceof Array && this.childNodes.every(child => child instanceof Component)){
        this.childNodes.map(child => this.htmlElement.append(child.htmlElement))
       }
    }
}
export default Table;