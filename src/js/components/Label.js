import WrapperComponent from "../libs/WrapperComponent.js";

class Label extends WrapperComponent {
    attrFor;
    
    constructor(innerText, attrFor) {
        super(document.createElement('label'),
            document.createTextNode(innerText));
        this.attrId = attrFor;
        this.init();
    }
    init() {
        this.htmlElement.setAttribute('for', this.attrFor);
    }
}

export default Label;
