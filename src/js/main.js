import Form from './components/Form.js';
import Heading from './components/Heading.js';
import Section from './components/Section.js';

const rootElement = document.querySelector('#root');
if (root === null) {
    throw new Error('Appliocation root element not found');
}

const addProduct = (data) => {
    console.log(data);
}

const headingFormSection = new Heading('h2', 'Add new Product');
const formAddProduct = new Form(undefined, addProduct);

const sectionOfForm = new Section([
    headingFormSection.htmlElement,
    formAddProduct.htmlElement
]);

rootElement.append(
    sectionOfForm.htmlElement,
);
/*
    Sukurti visus komponentus
    ir juos stilizuoti

*/