import WrapperComponent from "../libs/WrapperComponent.js";

class Button extends WrapperComponent {
    constructor(innerText) {
        super(document.createElement('button'),
            innerText ? document.createTextNode(innerText) : undefined
        );

        this.init();
    }

    init() {
        this.htmlElement.className = 'btn';
    }
}

export default Button;
