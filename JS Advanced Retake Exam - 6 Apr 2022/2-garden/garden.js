class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable - spaceRequired <= 0) {
            throw new Error('Not enough space in the garden.');
        }

        let plant = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0,
        };

        this.plants.push(plant);
        
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        for (const plant of this.plants) {
            if (plant.plantName === plantName) {
                if (plant.ripe) {
                    throw new Error(`The ${plantName} is already ripe.`);
                }

                plant.ripe = true;
                plant.quantity += quantity;

                if (quantity === 1) {
                    return `${quantity} ${plantName} has successfully ripened.`;
                } else if (quantity > 1) {
                    return `${quantity} ${plantName}s have successfully ripened.`;
                }
            }
        }

        throw new Error(`There is no ${plantName} in the garden.`);
    }

    harvestPlant(plantName) {
        for (const plant of this.plants) {
            if (plant.plantName === plantName) {
                if (!plant.ripe) {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
                }

                let currentPlant = plant;

                this.spaceAvailable += currentPlant.spaceRequired;
                this.plants = this.plants.filter(function(el) { return el.plantName != plantName; });

                delete currentPlant.spaceRequired;
                delete currentPlant.ripe;

                this.storage.push(currentPlant);

                return `The ${plantName} has been successfully harvested.`;
            }
        }

        throw new Error(`There is no ${plantName} in the garden.`);
    }

    generateReport() {
        let result = [];

        result.push(`The garden has ${this.spaceAvailable} free space left.`);

        this.plants.sort((a, b) => (a.plantName.localeCompare(b.plantName)));

        let plantNames = [];
        for (const plant of this.plants) {
            plantNames.push(plant.plantName);
        }
        
        result.push(`Plants in the garden: ${plantNames.join(', ')}`);

        if (this.storage.length <= 0) {
            result.push('Plants in storage: The storage is empty.');
        } else {
            let storagePlants = [];
            for (const plant of this.storage) {
                storagePlants.push(`${plant.plantName} (${plant.quantity})`);
            }

            result.push(`Plants in storage: ${storagePlants.join(', ')}`);
        }

        return result.join('\n');
    }
}

