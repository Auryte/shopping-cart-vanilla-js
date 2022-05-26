class Component {
    static isInstance(val) {
        return val instanceof Component;
    }

    static isArrayOfInstances(arr) {
        return arr instanceof Array && arr.every(x => x instanceof Component);
    }

    htmlElement;
    props;

    constructor(htmlElement, props = {}) {
        if (!(htmlElement instanceof HTMLElement)) {
            throw new Error('htmlElement must be of prototype HTMLElement');
        };
        this.htmlElement = htmlElement;
        this.props = props;
    }

    setChildrenComponents(...children) {
        this.htmlElement.append(...children.map(x => x.htmlElement));
    }

    setNewProps(newProps) {
        const oldProps = { ...this.props };
        this.props = {
            ...oldProps,
            ...newProps,
        };

        this.updateOnPropsChange();
    }
}

export default Component;
