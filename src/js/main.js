import ProductFormSection from './concreteComponents/ProductFormSection.js';
import ProductTableSection from './concreteComponents/ProductTableSection.js';
import LocalStorageService from './services/LocalStorageService.js';
import ProductCollection from './services/ProductsCollection.js';


const rootElement = document.querySelector('#root');
if (root === null) {
    throw new Error('Appliocation root element not found');
}
const collection = new ProductCollection;

const handleFormSubmit = (formData) => {
    for (const property in formData) {
        formData[property] = isNaN(formData[property]) ? formData[property] : Number(formData[property])
    }
    collection.add(formData);
}

const productFormSection = new ProductFormSection({
    onSubmit: handleFormSubmit
});
const productTableSection = new ProductTableSection({
    productCollectionData: collection.data
});

rootElement.append(
    productFormSection.htmlElement,
    productTableSection.htmlElement
);
