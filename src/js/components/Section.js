import WrapperComponent from "../libs/WrapperComponent.js";

class Section extends WrapperComponent {
    constructor(childNode){
        super(document.createElement('section'), childNode);
        this.init();
    }

    init(){
        this.htmlElement.className ='section-test';
    }
}

export default Section;