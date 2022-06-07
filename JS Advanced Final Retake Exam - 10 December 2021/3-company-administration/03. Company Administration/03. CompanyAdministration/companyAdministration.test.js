const companyAdministration = require('./companyAdministration');
const expect = require('chai').expect;

describe('companyAdministration function tests', function () {
    describe('hiringEmployee method tests', function () {
        it('should throw error when position is not programmer', function () {
            expect(() => {companyAdministration.hiringEmployee('Erin', 'Manager', 10)}).to.throw('We are not looking for workers for this position.');
        });
        it('should return success when position is programmer with 3 years of experience', function() {
            expect(companyAdministration.hiringEmployee('Erin', 'Programmer', 3)).to.equal('Erin was successfully hired for the position Programmer.');
        })
        it('should return success when position is programmer with more than 3 years of experience', function() {
            expect(companyAdministration.hiringEmployee('Erin', 'Programmer', 10)).to.equal('Erin was successfully hired for the position Programmer.');
        })
        it('should return unsuccessful when position is programmer with less than 3 years of experience', function() {
            expect(companyAdministration.hiringEmployee('Erin', 'Programmer', 2)).to.equal('Erin is not approved for this position.');
        });
        it('should return unsuccessful when position is programmer with less than 0 years of experience', function() {
            expect(companyAdministration.hiringEmployee('Erin', 'Programmer', -5)).to.equal('Erin is not approved for this position.');
        });
    });
    describe('calculateSalary method tests', function () {
        it('should throw error when hours is not number', function () {
            expect(() => {companyAdministration.calculateSalary('10')}).to.throw('Invalid hours');
        });
        it('should throw error when hours is not less than 0', function () {
            expect(() => {companyAdministration.calculateSalary(-5)}).to.throw('Invalid hours');
        });
        it('should return 0 with 0 hours', function() {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });
        it('should return 1500 with 100 hours', function() {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500);
        });
        it('should return 3475 with 165 hours', function() {
            expect(companyAdministration.calculateSalary(165)).to.equal(3475);
        });
    });
    describe('firedEmployee method tests', function () {
        it('should throw error with no input', function () {
            expect(() => {companyAdministration.firedEmployee()}).to.throw('Invalid input');
        });
        it('should throw error when employees is not an array', function () {
            expect(() => {companyAdministration.firedEmployee('Erin', 5)}).to.throw('Invalid input');
        });
        it('should throw error when index is string', function () {
            expect(() => {companyAdministration.firedEmployee(['Erin'], 'integer')}).to.throw('Invalid input');
        });
        it('should throw error when index is flaot', function () {
            expect(() => {companyAdministration.firedEmployee(['Erin'], 5.5)}).to.throw('Invalid input');
        });
        it('should throw error with empty array and index 0', function () {
            expect(() => {companyAdministration.firedEmployee([], 0)}).to.throw('Invalid input');
        });
        it('should throw error when index is less than 0', function () {
            expect(() => {companyAdministration.firedEmployee(['Erin'], -5)}).to.throw('Invalid input');
        });
        it('should throw error when index equals array length', function () {
            expect(() => {companyAdministration.firedEmployee(['Emp1', 'Emp2', 'Emp3'], 3)}).to.throw('Invalid input');
        });
        it('should throw error when index is bigger than array length', function () {
            expect(() => {companyAdministration.firedEmployee(['Emp1', 'Emp2', 'Emp3'], 4)}).to.throw('Invalid input');
        });
        it('should return names with valid input - v1', function () {
            expect(companyAdministration.firedEmployee(['Emp1', 'Emp2', 'Emp3'], 0)).to.equal('Emp2, Emp3');
        });
        it('should return names with valid input - v2', function () {
            expect(companyAdministration.firedEmployee(['Emp1', 'Emp2', 'Emp3'], 2)).to.equal('Emp1, Emp2');
        });
        it('should return empty string with valid input - v3', function () {
            expect(companyAdministration.firedEmployee(['Emp1'], 0)).to.equal('');
        });
    });
})