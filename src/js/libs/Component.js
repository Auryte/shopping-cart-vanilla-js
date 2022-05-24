class Component {
    htmlElement;
    props; 
    
    constructor(htmlElement, props = {}) {
        if (!(htmlElement instanceof HTMLElement)) {
            throw new Error('htmlElement must be of prototype HTMLElement');
        }
        this.htmlElement = htmlElement;
        this.props = props;
        if(this.updateOnPropsChange){
            this.updateOnPropsChange();
        }
    }

    setNewProps(newProps) {
        const oldProps = { ...this.props };
        this.props = {
            ...oldProps,
            ...newProps,
        }

        this.updateOnPropsChange();
    }
}

export default Component;
