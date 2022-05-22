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
    const productCopy = Product.clone(product);
    console.log("product", product);
    console.log("productCopy", productCopy);

    const productCollection = new ProductCollection([]);
    productCollection.add(productCopy);
    console.log(productCollection.data);
    store.set('products', productCopy);
    return productCopy;
}

const headingFormSection = new Heading('h2', 'Add new Product');
const headingForTable = new Heading('h2', 'Product list');
const labelTitle = new Label('Title', 'product-title-input');
const labelPrice = new Label('Price', 'product-price-input');
const labelQuantity = new Label('Quantity', 'product-quantity-input');
const inputTitle = new Input('text', 'product-title-input');
const inputPrice = new Input('number', 'product-price-input');
const inputQuantity = new Input('number', 'product-quantity-input');
const buttonAddProduct = new Button('Add Product');
const buttonRemove = new Button('Remove');

const formAddProduct = new Form([
    labelTitle.htmlElement,
    inputTitle.htmlElement,
    labelPrice.htmlElement,
    inputPrice.htmlElement,
    labelQuantity.htmlElement,
    inputQuantity.htmlElement,
    buttonAddProduct.htmlElement,
], 'product-form', addProduct);
const tableThTitle = new TableCell('th', 'Title');
const tableThPrice = new TableCell('th', 'Price');
const tableThQuantity = new TableCell('th', 'Quantity');
const tableThSum = new TableCell('th', 'Subtotal');
const tableThRemove = new TableCell('th', 'Remove');

const tableTdTitle = new TableCell('td', 'Title');
const tableTdPrice = new TableCell('td', 'Price');
const tableTdId = new TableCell('td', 'Id', 'invisible');
const tableTdQuantity = new TableCell('td', 'Quantity');
const tableTdSum = new TableCell('td', 'Subtotal');
const tableTdButton = new TableCell('td', 'Remove');

const tableHeadRow = new TableRow([
    tableThTitle.htmlElement,
    tableThPrice.htmlElement,
    tableThQuantity.htmlElement,
    tableThSum.htmlElement,
    tableThRemove.htmlElement
]);
const tableBodyRow = new TableRow([
    tableTdId.htmlElement,
    tableTdTitle.htmlElement,
    tableTdPrice.htmlElement,
    tableTdQuantity.htmlElement,
    tableTdSum.htmlElement,
    tableTdButton.htmlElement
], 'product-list-row');

const tableHead = new TableElement('thead', tableHeadRow.htmlElement);
const tableBody = new TableElement('tbody', tableBodyRow.htmlElement, 'product-list');
const tableProducts = new Table([
    tableHead.htmlElement,
    tableBody.htmlElement
], 'product-list-table');

const sectionOfForm = new Section([
    headingFormSection.htmlElement,
    formAddProduct.htmlElement,
]);
const sectionOfTable = new Section([
    headingForTable.htmlElement,
    tableProducts.htmlElement
]);
rootElement.append(
    sectionOfForm.htmlElement,
    sectionOfTable.htmlElement
);
