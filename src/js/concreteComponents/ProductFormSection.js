import Button from '../components/Button.js';
import Form from '../components/Form.js';
import Heading from '../components/Heading.js';
import Input from '../components/Input.js';
import Label from '../components/Label.js';
import Component from '../libs/Component.js';


class ProductFormSection extends Component {
    onSubmit;

    constructor({onSubmit}) {
        super(document.createElement('section'));
        this.onSubmit = onSubmit;
        this.init();
    }

    init() {
        const headingFormSection = new Heading({ type: 'h2', innerText: 'Add new Product' });
        const labelTitle = new Label({ innerText: 'Title', attributeFor: 'product-title-input' });
        const labelPrice = new Label({ innerText: 'Price', attributeFor: 'product-price-input' });
        const labelQuantity = new Label({ innerText: 'Quantity', attributeFor: 'product-quantity-input' });

        const inputTitle = new Input({ type: 'text', id: 'product-title-input', name: 'title' });
        const inputPrice = new Input({ type: 'number', id: 'product-price-input', name: 'price' });
        const inputQuantity = new Input({ type: 'number', id: 'product-quantity-input', name: 'quantity' });

        const buttonAddProduct = new Button({ innerText: 'Add Product', className: 'btn', type: 'submit' });
       
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
            onSubmit: this.onSubmit
        });
        this.htmlElement.className = 'section-form';
        this.setChildrenComponents(headingFormSection, formAddProduct);
    }
}
export default ProductFormSection;