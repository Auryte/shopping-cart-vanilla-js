class Product {
    static clone(originalProduct) {
        const { id, title, price, quantity } = originalProduct;
        const productCopy = new Product(id, title, price, quantity);
        return productCopy;
    }

    #id;
    #title;
    #price;
    #quantity;

    constructor(id, title, price, quantity) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    get id() { return this.#id; }

    get title() { return this.#title; }

    get price() { return this.#price; }

    get quantity() { return this.#quantity; }

    get props() {
        const formattedProps = {
            id: this.#id,
            title: this.#title,
            price: this.#price,
            quantity: this.#quantity
        };

        return formattedProps;
    }

    set id(newId) {
        if (this.#id !== undefined) {
            throw new Error('Can not change Product.id, id already exists.');
        };
        if (typeof newId !== 'string') {
            throw new Error('Product.id must be string.');
        }
        this.#id = newId;
    }

    set title(newTitle) {
        if (typeof newTitle !== 'string') {
            throw new Error('Product.title must be a string');
        }
        if (newTitle === '') {
            throw new Error('Product.title can not be empty');
        }
        this.#title = newTitle;
    }

    set price(newPrice) {
        if (typeof newPrice !== "number") {
            throw new Error('Product.price must be a number');
        }
        if (newPrice < 1) {
            throw new Error('Product.price can not be empty');
        }
        this.#price = newPrice;
    }

    set quantity(newQuantity) {
        if (typeof newQuantity !== "number") {
            throw new Error('Product.quantity must be a number');
        }
        if (newQuantity < 1) {
            throw new Error('Product.quantity can not be empty');
        }
        this.#quantity = newQuantity;
    }

}

export default Product;
