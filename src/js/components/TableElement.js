import Component from "../libs/Component.js";

const types = ['thead', 'tbody'];

class TableElement extends Component {
    type;

    constructor({ type = 'tbody' }, props) {
        if (!types.includes(type)) {
            throw new Error('Incorrect table element');
        }
        super(document.createElement(type), props);
        if (props && props.content !== undefined) {
            const isComponent = Component.isInstance(props.content);
            const isArrayOfComponents = Component.isArrayOfInstances(props.content);
            if (!(isComponent || isArrayOfComponents)) {
                throw new Error('Children should be of prototype Component');
            }
            this.props = props;
            this.updateOnPropsChange();
        }
    }

    updateOnPropsChange() {
        const { content } = this.props;
        this.htmlElement.innerHTML = '';
        this.htmlElement.append(content instanceof Component ? content.htmlElement : this.setChildrenComponents(...content));
    }
}

export default TableElement;
