const testNumbers = require('././testNumbers');
const expect = require('chai').expect;

describe('testNumbers tests', () => {
    describe('sumNumbers method tests', function() {
        it('should return undefined when num1 is string', function() {
            expect(testNumbers.sumNumbers('one', 1)).to.equal(undefined);
        });
        it('should return undefined when num1 is object', function() {
            expect(testNumbers.sumNumbers({}, 1)).to.equal(undefined);
        });
        it('should return undefined when num2 is string', function() {
            expect(testNumbers.sumNumbers(1, 'one')).to.equal(undefined);
        });
        it('should return undefined when num2 is object', function() {
            expect(testNumbers.sumNumbers(1, {})).to.equal(undefined);
        });
        it('should return valid when num1 and num2 are positive numbers', function() {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
        });
        it('should return valid when num1 and num2 are negative numbers', function() {
            expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
        });
    });
    describe('numberChecker method tests', function() {
        it('should throw when input is string', function() {
            expect(() => {testNumbers.numberChecker('one')}).to.throw('The input is not a number!');
        });
        it('should throw when input is float as string with comma as decimal', function() {
            expect(() => {testNumbers.numberChecker('1,1')}).to.throw('The input is not a number!');
        });
        it('should return when input is float as string', function() {
            expect(testNumbers.numberChecker('1.1')).to.equal('The number is odd!');
        });
        it('should return when input is integer as string', function() {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });
        it('should return when input is integer', function() {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
        it('should return when input is float', function() {
            expect(testNumbers.numberChecker(1.1)).to.equal('The number is odd!');
        });
        it('should return when input is empty array', function() {
            expect(testNumbers.numberChecker([])).to.equal('The number is even!');
        });
    });
    describe('averageSumArray method tests', function() {
        it('should return 10 when [5, 10, 15]', function() {
            expect(testNumbers.averageSumArray([5, 10, 15])).to.equal(10);
        });
        it('should throw when no input', function() {
            expect(() => {testNumbers.averageSumArray('1,1')}).to.throw(TypeError);
        });
        it('should return NaN when []', function() {
            expect(testNumbers.averageSumArray([])).to.equal(NaN);
        });
        it("should return 2 when ['1', '2', '3']", function() {
            expect(testNumbers.averageSumArray(['1', '2', '3'])).to.equal(2);
        });
    });
})