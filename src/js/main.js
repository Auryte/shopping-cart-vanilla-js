import ProductFormSection from './concreteComponents/ProductFormSection.js';
import ProductTableSection from './concreteComponents/ProductTableSection.js';
import ProductCollection from './services/ProductsCollection.js';

const rootElement = document.querySelector('#root');
if (root === null) {
    throw new Error('Appliocation root element not found');
}
const collection = new ProductCollection();

const handleFormSubmit = (formData) => {
    for (const property in formData) {
        formData[property] = isNaN(formData[property]) ? formData[property] : Number(formData[property])
    }
    collection.add(formData);
    productTableSection.setNewProps({ products: collection.data });
}

const removeProduct = (id) => {
    collection.removeById(id);
    productTableSection.setNewProps({ products: collection.data });
}

const changePropuctProperty = (id, property, value) => {
    collection.updateById(id, { [property]: value });
    productTableSection.setNewProps({ products: collection.data });
}

const productFormSection = new ProductFormSection({
    onSubmit: handleFormSubmit
});
const productTableSection = new ProductTableSection(
    { onClick: removeProduct, onPropChange: changePropuctProperty },
    { products: collection.data },
);

rootElement.append(
    productFormSection.htmlElement,
    productTableSection.htmlElement
);
