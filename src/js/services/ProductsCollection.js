import Product from '../entities/Product.js';

class ProductCollection {
    #data;

    constructor(data) {
        this.data = data;
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

    add(newProduct) {
        if(!(newProduct instanceof Product)){
            throw new Error('klaida')
        }
        this.#data.push(Product.clone(newProduct));
    }

    removeById(id) {
        const productIndex = this.#data.findIndex(product => product.id === id);
        if (productIndex === -1) {
            throw new Error('There is no product with such id')
        }
        this.#data.splice(productIndex, 1);
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
    }
}

export default ProductCollection;