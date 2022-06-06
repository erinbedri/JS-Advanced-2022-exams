const rentCar = require('./rentCar');
const expect = require('chai').expect;

describe('rentCar tests', function() {
    describe('searchCar module tests', function() {
        it('it should throw error with two invalid parameters', function() {
            expect(function() {rentCar.searchCar({}, 10)}).to.throw('Invalid input!');
        });
        it('it should throw error with first invalid parameter', function() {
            expect(function() {rentCar.searchCar({}, 'A4')}).to.throw('Invalid input!');
        });
        it('it should throw error with second invalid input', function() {
            expect(function() {rentCar.searchCar(['A4', 'A3'], 10)}).to.throw('Invalid input!');
        });
        it('it should throw error when no car is found', function() {
            expect(function() {rentCar.searchCar(['A4', 'A3'], 'A2')}).to.throw('There are no such models in the catalog!');
        });
        it('it should return 1 when 1 car is found', function() {
            expect(rentCar.searchCar(['A4', 'A3'], 'A3')).to.equal('There is 1 car of model A3 in the catalog!');
        });
     });

     describe('calculatePriceOfCar module tests', function() {
        it('it should throw error with two invalid parameters', function() {
            expect(function() {rentCar.calculatePriceOfCar({}, {})}).to.throw('Invalid input!');
        });
        it('it should throw error with first invalid parameter', function() {
            expect(function() {rentCar.calculatePriceOfCar({}, 20)}).to.throw('Invalid input!');
        });
        it('it should throw error with second invalid input', function() {
            expect(function() {rentCar.calculatePriceOfCar('A4', '10')}).to.throw('Invalid input!');
        });
        it('it should throw error when no model in the catalogue', function() {
            expect(function() {rentCar.calculatePriceOfCar('Lada', 10)}).to.throw('No such model in the catalog!');
        });
        it('it should return when model exists in the catalogue', function() {
            expect(rentCar.calculatePriceOfCar('Audi', 10)).to.equal('You choose Audi and it will cost $360!');
        })
     });

     describe('checkBudget module tests', function() {
        it('it should throw error with three invalid parameters', function() {
            expect(function() {rentCar.checkBudget({}, {}, {})}).to.throw('Invalid input!');
        });
        it('it should return "You need a bigger budget!"', function() {
            expect(rentCar.checkBudget(10, 20, 10)).to.equal('You need a bigger budget!');
        });
        it('it should return "You rent a car!"', function() {
            expect(rentCar.checkBudget(10, 10, 200)).to.equal('You rent a car!');
        });
        it('it should return "You rent a car!" when budget == cost', function() {
            expect(rentCar.checkBudget(10, 10, 100)).to.equal('You rent a car!');
        });
     });

});
