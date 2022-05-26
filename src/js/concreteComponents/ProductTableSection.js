import Button from '../components/Button.js';
import Heading from '../components/Heading.js';
import Table from '../components/Table.js';
import TableCell from '../components/TableCell.js';
import TableRow from '../components/TableRow.js';
import Component from '../libs/Component.js';

class ProductTableSection extends Component {
    table;
    onClick;
    onPropChange;

    constructor({ onClick, onPropChange }, props) {
        super(document.createElement('section'), props);
        this.onClick = onClick;
        this.table = new Table({
            headers: ['Title', 'Price', 'Quantity', 'SubTotal', 'Remove'],
            className: 'product-list-table'
        });
        this.onPropChange = onPropChange;
        this.init();
    }

    init() {
        const { products } = this.props;
        const headingForTable = new Heading({ type: 'h2', innerText: 'Product list' });
        this.setChildrenComponents(headingForTable, this.table);
        this.updateOnPropsChange();
    }

    updateOnPropsChange() {
        const { products } = this.props;
       
        const tbodyContent = products.map(({ id, title, price, quantity }) => {
            const button = new Button({
                innerText: 'Remove',
                className: 'btn ',
                type: 'button',
                onClick: () => this.onClick(id)
            });
            const tableTdTitle = new TableCell({ content: title, onChange: (value) => this.onPropChange(id, 'title', value) }, {});
            const tableTdPrice = new TableCell({ content: price, onChange: (value) => this.onPropChange(id, 'price', Number(value)) }, {});
            const tableTdId = new TableCell({ className: 'invisible', content: id, }, {});
            const tableTdQuantity = new TableCell({ content: quantity, onChange: (value) => this.onPropChange(id, 'quantity', Number(value)) }, {});
            const tableTdSum = new TableCell({ content: price * quantity }, {});
            const tableTdButton = new TableCell({ content: button }, {});

            const tableBodyRow = new TableRow({
                content: [
                    tableTdId,
                    tableTdTitle,
                    tableTdPrice,
                    tableTdQuantity,
                    tableTdSum,
                    tableTdButton,
                ],
                className: 'product-list-row'
            });
            return tableBodyRow;
        });

        this.table.setNewProps({ tbodyContent })
    }
}

export default ProductTableSection;
