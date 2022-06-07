class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let productsAdded = new Set();

        vegetables.forEach(line => {
            let [type, quantity, price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            for (const vegetable of this.availableProducts) {
                if (vegetable.type === type) {
                    vegetable.quantity += quantity;

                    if (vegetable.price < price) {
                        vegetable.price = price;
                    }

                    productsAdded.add(vegetable.type);

                    return;
                }
            }

            let currentVegetable = {
                type: type,
                quantity: quantity,
                price: price,
            }

            this.availableProducts.push(currentVegetable);
            productsAdded.add(currentVegetable.type);

        });
        return 'Successfully added ' + Array.from(productsAdded).join(', ');
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach(line => {
            let [type, quantity] = line.split(' ');
            quantity = Number(quantity);

            let currentProduct = this.availableProducts.find(x => x.type == type);

            if (!currentProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (currentProduct.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let currentPrice = quantity * currentProduct.price;
            currentProduct.quantity -= quantity;
            totalPrice += currentPrice;

        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let currentVegetable = this.availableProducts.find(x => x.type == type);

        if (!currentVegetable) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (currentVegetable.quantity <= Number(quantity)) {
            currentVegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        currentVegetable.quantity -= Number(quantity);
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let result = ['Available vegetables:']; 

        this.availableProducts.sort((a, b) => a.price - b.price);

        this.availableProducts.forEach(vegetable => {
            result.push(`${vegetable.type}-${vegetable.quantity}-$${vegetable.price}`);
        });

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }

}



