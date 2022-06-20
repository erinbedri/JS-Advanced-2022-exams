class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let result = [];

        products.forEach(productInfo => {
            let [productName, productQuantity, productTotalPrice] = productInfo.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts.productName += productQuantity;
                } else {
                    this.stockProducts.productName = productQuantity;
                } 
                this.budgetMoney -= productTotalPrice;
                result.push(`Successfully loaded ${productQuantity} ${productName}`); 

            } else {
                result.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });
        return result.join('\n');
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
