import Component from "../libs/Component.js";
import TableCell from "./TableCell.js";
import TableElement from "./TableElement.js";
import TableRow from "./TableRow.js";

class Table extends Component {
    headers;
    tbody;
    className;

    constructor({ headers, className }) {
        super(document.createElement('table'));
        this.headers = headers;
        this.className = className;
        this.tbody = new TableElement({ type: 'tbody' });
        this.init();
    }

    init() {
        this.htmlElement.className = this.className;
        const headerTableCells = this.headers.map(content => new TableCell({ content }, { type: 'th' }));
        const headerRow = new TableRow({ content: headerTableCells });
        const tableHead = new TableElement({ type: 'thead' }, { content: headerRow });
        this.setChildrenComponents(tableHead, this.tbody);
    }

    updateOnPropsChange() {
        const { tbodyContent } = this.props;
        this.tbody.setNewProps({
            content: tbodyContent,
        })
    }
}

export default Table;
