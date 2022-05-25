import Button from '../components/Button.js';
import Heading from '../components/Heading.js';
import Table from '../components/Table.js';
import TableCell from '../components/TableCell.js';
import TableElement from '../components/TableElement.js';
import TableRow from '../components/TableRow.js';
import Component from '../libs/Component.js';

class ProductTableSection extends Component {
    productCollectionData;

    constructor({ productCollectionData }) {
        super(document.createElement('section'));
        this.productCollectionData = productCollectionData;
        this.init();
    }
    init() {
        const headingForTable = new Heading({ type: 'h2', innerText: 'Product list' });
        const buttonRemove = new Button({
            innerText: 'Remove', className: 'btn delete', type: 'button', onClick: () => {
                tableThTitle.setNewProps({
                    content: 'PAKEISTA'
                })
            }
        });
        const tableThTitle = new TableCell({ content: 'Title' }, { type: 'th' });
        const tableThPrice = new TableCell({ content: 'Price' }, { type: 'th' });
        const tableThQuantity = new TableCell({ content: 'Quantity' }, { type: 'th' });
        const tableThSum = new TableCell({ content: 'Subtotal' }, { type: 'th' });
        const tableThRemove = new TableCell({ content: 'Remove' }, { type: 'th' });

        const tableHeadRow = new TableRow({
            childNode: [
                tableThTitle,
                tableThPrice,
                tableThQuantity,
                tableThSum,
                tableThRemove
            ]
        });

        const tableBodyRow = this.productCollectionData.map(({ id, title, price, quantity }) => {
            const tableTdTitle = new TableCell({ content: title }, {});
            const tableTdPrice = new TableCell({ content: price }, {});
            const tableTdId = new TableCell({ content: id, className: 'invisible' }, {});
            const tableTdQuantity = new TableCell({ content: quantity }, {});
            const tableTdSum = new TableCell({ content: price * quantity }, {});
            const tableTdButton = new TableCell({ content: buttonRemove }, {});
            const tableBodyRow = new TableRow({
                childNode: [
                    tableTdId,
                    tableTdTitle,
                    tableTdPrice,
                    tableTdQuantity,
                    tableTdSum,
                    tableTdButton
                ],
                className: 'product-list-row'
            });
            return tableBodyRow;
        })


        const tableHead = new TableElement( { childNode : [tableHeadRow], type: 'thead' });
        const tableBody = new TableElement(
            {
                childNode: [
                    ...tableBodyRow
                ],
                type: 'tbody',
                id: 'product-list'
            });
        const tableProducts = new Table({
            childNode: [
                tableHead,
                tableBody
            ],
            id: 'product-list-table'
        });
        this.setChildrenComponents(headingForTable, tableProducts);
    }

}
export default ProductTableSection;