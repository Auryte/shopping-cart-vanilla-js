import Product from '../entities/Product.js';
import LocalStorageService from '../services/LocalStorageService.js';

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

class ProductCollection {
    #data;

    constructor() {
        const store = new LocalStorageService;
        const products = store.get('products');
        if (products) products.map(Product.clone);
        this.store = store;
        this.#data = products ?? [];
    }

    get data() {
        return this.#data.map(Product.clone);
    }

    set data(newData) {
        if (!(newData instanceof Array)) {
            throw new Error('newData must be an Array.');
        }
        if (!newData.every((x) => x instanceof Product)) {
            throw new Error('newData must consist of Product instances.');
        }
        this.#data = newData.map(Product.clone);
    }
    
    syncFromLocalStorage() {
        this.store.remove('products');
        this.store.set('products', this.#data);
    }

    add(productProps) {
        const createdId = uid();
        productProps = {id: createdId, ...productProps};
        const {id, title, price, quantity} = productProps;
        const product = new Product(id, title, price, quantity);
        console.log("product", product.props)
        this.#data.push(product.props);
        console.log(this.#data)
        this.syncFromLocalStorage();
    }

    removeById(id) {
        const productIndex = this.#data.findIndex(product => product.id === id);
        if (productIndex === -1) {
            throw new Error('There is no product with such id')
        }
        this.#data.splice(productIndex, 1);
        this.syncFromLocalStorage();

    }

    updateById(id, propsUpdate) {
        const productIndex = this.#data.findIndex(product => product.id === id);
        if (productIndex === -1) {
            throw new Error('There is no product with such id')
        }
        if (!(propsUpdate instanceof Object)) {
            throw new Error('Product properties must be an object')
        }
        const productRef = this.#data[productIndex];
        const { title, price, quantity } = propsUpdate;

        if (title !== undefined) {
            productRef.title = title;
        }

        if (price !== undefined) {
            productRef.price = price;
        }

        if (quantity !== undefined) {
            productRef.quantity = quantity;
        }
        this.syncFromLocalStorage();

    }
}

export default ProductCollection;