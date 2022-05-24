import Button from './components/Button.js';
import Form from './components/Form.js';
import Heading from './components/Heading.js';
import Input from './components/Input.js';
import Label from './components/Label.js';
import Section from './components/Section.js';
import Table from './components/Table.js';
import TableCell from './components/TableCell.js';
import TableElement from './components/TableElement.js';
import TableRow from './components/TableRow.js';
import Product from './entities/Product.js';
import LocalStorageService from './services/LocalStorageService.js';
import ProductCollection from './services/ProductsCollection.js';

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const rootElement = document.querySelector('#root');
if (root === null) {
    throw new Error('Appliocation root element not found');
}
const store = new LocalStorageService();

const addProduct = (data) => {
    const dataValues = data.map(el => isNaN(el) ? el : Number(el));
    dataValues.unshift(uid());
    const [id, title, price, quantity] = dataValues;
    const product = new Product(id, title, price, quantity);
    // const productCollection = new ProductCollection([]);
    // productCollection.add(product);
    // console.log(productCollection.data);
    store.set('products', product.props);
    return product;
}

const headingFormSection = new Heading({ type: 'h2', innerText: 'Add new Product' });
const headingForTable = new Heading({ type: 'h2', innerText: 'Product list' });
const labelTitle = new Label({ innerText: 'Title', attributeFor: 'product-title-input' });
const labelPrice = new Label({ innerText: 'Price', attributeFor: 'product-price-input' });
const labelQuantity = new Label({ innerText: 'Quantity', attributeFor: 'product-quantity-input' });
const inputTitle = new Input({ type: 'text', id: 'product-title-input' });
const inputPrice = new Input({ type: 'number', id: 'product-price-input' });
const inputQuantity = new Input({ type: 'number', id: 'product-quantity-input' });
const buttonAddProduct = new Button({ innerText: 'Add Product', className: 'btn', type: 'submit' });
const buttonRemove = new Button({
    innerText: 'Remove', className: 'btn delete', type: 'button', onClick: () => {
        tableThTitle.setNewProps({
            content: 'PAKEISTA'
        })
    }
});

const formAddProduct = new Form({
    childNode: [
        labelTitle,
        inputTitle,
        labelPrice,
        inputPrice,
        labelQuantity,
        inputQuantity,
        buttonAddProduct,
    ],
    id: 'product-form',
    onSubmit: addProduct
});

const tableThTitle = new TableCell({ content: 'Title' }, { type: 'th' });
const tableThPrice = new TableCell({ content: 'Price' }, { type: 'th' });
const tableThQuantity = new TableCell({ content: 'Quantity' }, { type: 'th' });
const tableThSum = new TableCell({ content: 'Subtotal' }, { type: 'th' });
const tableThRemove = new TableCell({ content: 'Remove' }, { type: 'th' });

const tableTdTitle = new TableCell({ content: 'Title' }, {});
const tableTdPrice = new TableCell({ content: 'Price' }, {});
const tableTdId = new TableCell({ content: 'Id', className: 'invisible' }, {});
const tableTdQuantity = new TableCell({ content: 'Quantity' }, {});
const tableTdSum = new TableCell({ content: 'Subtotal' }, {});
const tableTdButton = new TableCell({ content: buttonRemove }, {});

const tableHeadRow = new TableRow({
    childNode: [
        tableThTitle,
        tableThPrice,
        tableThQuantity,
        tableThSum,
        tableThRemove
    ]
});
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

const tableHead = new TableElement({ content: tableHeadRow }, { type: 'thead' });
const tableBody = new TableElement({ content: tableBodyRow }, { type: 'tbody', id: 'product-list' });
const tableProducts = new Table({
    childNodes: [
        tableHead,
        tableBody
    ],
    id: 'product-list-table'
});

const sectionOfForm = new Section({
    childNode: [
        headingFormSection,
        formAddProduct
    ],
    className: 'section-form'
});
const sectionOfTable = new Section({
    childNode: [
        headingForTable,
        tableProducts
    ]
});
rootElement.append(
    sectionOfForm.htmlElement,
    sectionOfTable.htmlElement
);
