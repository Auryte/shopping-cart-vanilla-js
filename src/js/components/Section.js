import Component from "../libs/Component.js";

class Section extends Component {
    childNode;
    className;

    constructor({childNode, className}) {
        super(document.createElement('section'));
        if (childNode !== undefined) {
            this.isNode = childNode instanceof Component; 
            this.isArrayOfNodes = childNode instanceof Array && childNode.every(x => x instanceof Component);
            if (!(this.isNode || this.isArrayOfNodes)) {
                throw new Error('Children should be of prototype Node');
            }
            this.childNode = childNode;
            this.className = className;
        }
        this.init();
    }

    init() {
        if (this.className) this.htmlElement.className = this.className;
        if (this.isArrayOfNodes) {
            this.childNode.map(child =>  this.htmlElement.append(child.htmlElement))
        } else {
            this.htmlElement.appendChild(this.childNode.htmlElement);
        }
        
    }
}

export default Section;
