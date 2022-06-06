class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (model === '') {
            throw new Error('Invalid input!');
        };

        if (horsepower < 0 || !Number.isInteger(horsepower)) {
            throw new Error('Invalid input!');
        };

        if (price < 0) {
            throw new Error('Invalid input!');
        };

        if (mileage < 0) {
            throw new Error('Invalid input!');
        };

        let car = {
            model: model,
            horsepower: horsepower,
            price: price,
            mileage: mileage,
        };

        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    };

    sellCar(model, desiredMileage) {
        for (const car of this.availableCars) {
            if (car.model === model) {
                let currentCar = car;
                currentCar.soldPrice = 0;

                if (currentCar.mileage <= desiredMileage) {
                    currentCar.soldPrice = currentCar.price;
                }

                else if (currentCar.mileage - desiredMileage <= 40000) {
                    currentCar.soldPrice = currentCar.price * 0.95;
                }

                else if (currentCar.mileage - desiredMileage > 40000) {
                    currentCar.soldPrice = currentCar.price * 0.90;
                }

                delete currentCar.price;
                this.soldCars.push(currentCar);
                this.availableCars = this.availableCars.filter(function (car) { return car.model !== model; });

                this.totalIncome += currentCar.soldPrice;
                return `${model} was sold for ${currentCar.soldPrice.toFixed(2)}$`;
            }
        }

        throw new Error(`${model} was not found!`);
    };

    currentCar() {
        if (this.availableCars.length <= 0) {
            return 'There are no available cars';
        };
        
        let result = [];
        result.push('-Available cars:');

        for (const car of this.availableCars) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        }

        return result.join('\n');
    };

    salesReport(criteria) {
        if (criteria == 'horsepower' || criteria == 'model') {
            let result = [];
    
            if (criteria == 'horsepower') {
                this.soldCars.sort((a, b) => (b.horsepower - a.horsepower));
            }
    
            if (criteria == 'model') {
                this.soldCars.sort((a, b) => (a.model.localeCompare(b.model)));
            }
    
            result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
            result.push(`-${this.soldCars.length} cars sold:`);
    
            for (const car of this.soldCars) {
                result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
            }

            return result.join('\n');

        } else {
            throw new Error('Invalid criteria!');
        }
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.addCar('Audi A4', 220, 14900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
dealership.sellCar('Audi A3', 150000);
dealership.sellCar('Audi A4', 230000)
console.log(dealership.salesReport('horsepower'));
