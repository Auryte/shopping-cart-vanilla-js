class Component {
    htmlElement;

    constructor(htmlElement){
        if(!(htmlElement instanceof HTMLElement) ){
            throw new Error('htmlElement must be of prototype HTMLElement');
        }
        this.htmlElement = htmlElement;
    }
}

export default Component;
