const carService = require('./Car service');
const expect = require('chai').expect;

describe('carService tests', function() {
    describe('isItExpensive module tests', function() {
        it('should return "issue" with input "Engine"', function() {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        });
        it('should return "issue" with input "Transmission"', function() {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });
        it('should return "overall price..." with input different than "Engine" or "Transmission"', function() {
            expect(carService.isItExpensive('Test')).to.equal('The overall price will be a bit cheaper');
        });
     });
     describe('discount module tests', function() {
        it('should throw when 1st input not number', function() {
            expect(() => {carService.discount('not number', 10)}).to.throw('Invalid input');
        });
        it('should throw when 2nd input not number', function() {
            expect(() => {carService.discount(10, 'not number')}).to.throw('Invalid input');
        });
        it('should return "You cannot apply a discount" when 1st input is 2', function() {
            expect(carService.discount(2, 5)).to.equal('You cannot apply a discount');
        });
        it('should return "You cannot apply a discount" when 1st input is less than 2', function() {
            expect(carService.discount(1, 5)).to.equal('You cannot apply a discount');
        });
        it('should return "Discount applied! You saved ${1.05}$" when 1st input is greater than 2 and 2nd input is 7', function() {
            expect(carService.discount(3, 7)).to.equal(`Discount applied! You saved ${1.05}$`);
        });
        it('should return "Discount applied! You saved ${0.8999999999999999}$" when 1st input is greater than 2 and 2nd input is less than 7', function() {
            expect(carService.discount(3, 6)).to.equal(`Discount applied! You saved ${0.8999999999999999}$`);
        });
        it('should return "Discount applied! You saved ${3}$" when 1st input is greater than 7 and 2nd input is greater than 7', function() {
            expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved ${3}$`);
        });
     });
     describe('partsToBuy module tests', function() {
        it('should throw with 1st input non array', function() {
            expect(() => {carService.partsToBuy({}, [1, 2, 3])}).to.throw('Invalid input');
        });
        it('should throw with 2nd input non array', function() {
            expect(() => {carService.partsToBuy([1, 2, 3], {})}).to.throw('Invalid input');
        });
        it('should return 0 with partsCatalog is empty', function() {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });
        it('should return valid', function() {
            let parts = ([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]);
            let needed = (["blowoff valve", "injectors"]);

            expect(carService.partsToBuy(parts, needed)).to.equal(145);
        });
     });
});
