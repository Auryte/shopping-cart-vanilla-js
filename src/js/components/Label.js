import Component from "../libs/Component.js";

class Label extends Component {
    attributeFor;
    innerText;

    constructor({ innerText, attributeFor }) {
        super(document.createElement('label'));
        this.attributeFor = attributeFor;
        this.innerText = innerText;
        this.init();
    }
    
    init() {
        this.htmlElement.setAttribute('for', this.attributeFor);
        this.htmlElement.append(this.innerText ? document.createTextNode(this.innerText) : undefined)
    }
}

export default Label;
