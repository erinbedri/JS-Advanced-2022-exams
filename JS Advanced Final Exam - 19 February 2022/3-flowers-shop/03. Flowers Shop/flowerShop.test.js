const flowerShop = require('./flowerShop');
const expect = require('chai').expect;

describe('flowerShop function tests', function() {
    describe('calcPriceOfFlowers method tests', function() {
        it('should return with valid input', function() {
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 10)).to.equal('You need $50.00 to buy rose!');
        });
        it('should throw when flower parameter is not a string', function() {
            expect(function() {flowerShop.calcPriceOfFlowers(['rose'], 5, 10)}).to.throw('Invalid input!');
        });
        it('should throw when price parameter is not an integer', function() {
            expect(function() {flowerShop.calcPriceOfFlowers('rose', 5.55, 10)}).to.throw('Invalid input!');
        });
        it('should throw when quantity parameter is not an integer', function() {
            expect(function() {flowerShop.calcPriceOfFlowers('rose', 5, 10.5)}).to.throw('Invalid input!');
        });
     });

     describe('checkFlowersAvailable method tests', function() {
        it('should return "The ${flower} are available!" when flower is available', function() {
            expect(flowerShop.checkFlowersAvailable('rose', ['rose', 'tulip', 'red rose'])).to.equal('The rose are available!');
            
        });
        it('should return "The ${flower} are sold! You need to purchase more!" when flower is not available', function() {
            expect(flowerShop.checkFlowersAvailable('yellow rose', ['rose', 'tulip', 'red rose'])).to.equal('The yellow rose are sold! You need to purchase more!');
        });
        it('should throw an error with no parameters', function() {
            expect(function() {flowerShop.checkFlowersAvailable()}).to.throw(TypeError);
        });
     });

     describe('sellFlowers method tests', function() {
        it('should throw error when gardenArr is not an array', function() {
            expect(function() {flowerShop.sellFlowers({}, 10)}).to.throw('Invalid input!');
        });
        it('should throw error when space is not integer', function() {
            expect(function() {flowerShop.sellFlowers(['rose', 'red rose'], 10.5)}).to.throw('Invalid input!');
        });
        it('should throw error when space is less than 0', function() {
            expect(function() {flowerShop.sellFlowers(['rose', 'red rose'], -5)}).to.throw('Invalid input!');
        });
        it('should throw error when space equals gardenArr length', function() {
            expect(function() {flowerShop.sellFlowers(['rose', 'red rose'], 2)}).to.throw('Invalid input!');
        });
        it('should throw error when space is greater than gardenArr length', function() {
            expect(function() {flowerShop.sellFlowers(['rose', 'red rose'], 3)}).to.throw('Invalid input!');
        });
        it('should return with valid input', function() {
            expect(flowerShop.sellFlowers(['rose', 'red rose', 'yellow rose'], 2)).to.equal('rose / red rose');
        });
     });
});
