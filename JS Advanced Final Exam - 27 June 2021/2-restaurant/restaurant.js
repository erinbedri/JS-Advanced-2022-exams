class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    };

    loadProducts(products) {
        let result = [];

        products.forEach(productInfo => {
            let [productName, productQuantity, productTotalPrice] = productInfo.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                };
                this.budgetMoney -= productTotalPrice;
                result.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                result.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        })
        return result.join('\n');
    };

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        };

        this.menu[meal] = {
            neededProducts,
            price
        };

        let menuLength = Object.keys(this.menu).length;

        if (menuLength == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        };

        return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`;
    };

    showTheMenu() {
        if (!Object.keys(this.menu).length) {
            return 'Our menu is not ready yet, please come later...';
        };

        let result = [];

        for (const [meal, info] of Object.entries(this.menu)) {
            result.push(`${meal} - $ ${info.price}`);
        };

        return result.join('\n');
    };

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        };

        for (const data of this.menu[meal].neededProducts) {
            let [product, quantity] = data.split(' ');
            
            if (!this.stockProducts.hasOwnProperty(product) || Number(quantity) > this.stockProducts[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            };
        };

        for (const data of this.menu[meal].neededProducts) {
            let [product, quantity] = data.split(' ');
    
            this.stockProducts[product] -= Number(quantity);
        };

        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));

