const numberOperations = require('./numberOperations');
const expect = require('chai').expect;

describe('numberOperations function tests', function () {
    describe('powNumber method tests', function () {
        it('should return x**2 integer with positive integer', function () {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
    });
    describe('numberChecker method tests', function () {
        it('should throw error with string as input', function () {
            expect(() => {numberOperations.numberChecker('five')}).to.throw('The input is not a number!');
        });
        it('should throw error with object as input', function () {
            expect(() => {numberOperations.numberChecker({})}).to.throw('The input is not a number!');
        });
        it('should throw error with undefined as input', function () {
            expect(() => {numberOperations.numberChecker(undefined)}).to.throw('The input is not a number!');
        });
        it('should return with number as string', function () {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
        });
        it('should return with number less than 100', function () {
            expect(numberOperations.numberChecker('10')).to.equal('The number is lower than 100!');
        });
        it('should return with number greater than 100', function () {
            expect(numberOperations.numberChecker('110')).to.equal('The number is greater or equal to 100!');
        });
        it('should return with 100', function () {
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
        });
    });
    describe('sumArrays method tests', function () {
        it('should return new array', function () {
            expect(numberOperations.sumArrays([1, 2, 3], [3, 2, 1])).to.eql([4, 4, 4]);
        });
        it('should return new array with 1 longer array', function () {
            expect(numberOperations.sumArrays([1, 2, 3], [3, 2, 1, 10])).to.eql([4, 4, 4, 10]);
        });
    });
})