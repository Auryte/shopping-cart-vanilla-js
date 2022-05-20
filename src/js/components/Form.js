import WrapperComponent from "../libs/WrapperComponent.js";

class Form extends WrapperComponent{
    onSubmit;

    constructor(childNode, onSubmit) {
        super(document.createElement('form'), childNode);
        this.onSubmit = onSubmit;

        this.init();
    }

    init(){
        this.htmlElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.onSubmit('formos duomenys');
        });
        this.htmlElement.innerHTML= `
            <button type="submit" class="btn">Submit form</button>
        `;
    }
}

export default Form;