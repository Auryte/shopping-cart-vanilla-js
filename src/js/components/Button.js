import Component from "../libs/Component.js";

class Button extends Component {
    className;
    innerText;
    type;
    onClick;

    constructor({ innerText, className, type = 'button', onClick }) {
        super(document.createElement('button'));
        this.className = className;
        this.innerText = innerText;
        this.type = type;
        if (onClick) this.onClick = onClick;
        this.init();
    }

    init() {
        this.htmlElement.innerText = this.innerText;
        this.htmlElement.className = this.className;
        this.htmlElement.type = this.type;
        if (this.onClick) this.htmlElement.addEventListener('click', this.onClick);
    }
}

export default Button;
