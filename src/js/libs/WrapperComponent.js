import Component from "./Component.js";

class WrapperComponent extends Component {
    children;

    constructor(htmlElement, children) {
        super(htmlElement);
        if (children !== undefined) {
            const isNode = children instanceof Node;
            const isArrayOfNodes = children instanceof Array && children.every(x => x instanceof Node);

            if (!(isNode || isArrayOfNodes)) {
                throw new Error('WrapperComponent children should of prototype Node');
            }
            this.children = children;
            if (isArrayOfNodes) {
                this.htmlElement.append(...children);
            } else {

                this.htmlElement.appendChild(children);
            }
        }
    }
}

export default WrapperComponent;
