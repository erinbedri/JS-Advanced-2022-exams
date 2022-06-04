const bookSelection = require('./bookSelection');
const expect = require('chai').expect;

describe('bookSelection tests', function () {
    describe('isGenreSuitable method tests', function () {
        it('should return "Those books are suitable" with no input', function () {
            expect(bookSelection.isGenreSuitable()).to.equal('Those books are suitable');
        });
        it('should return "Those books are suitable" with genre "Thriller"', function () {
            expect(bookSelection.isGenreSuitable('Thriller')).to.equal('Those books are suitable');
        });
        it('should return "Those books are suitable" with genre "Comedy" and age 18', function () {
            expect(bookSelection.isGenreSuitable('Comedy', 18)).to.equal('Those books are suitable');
        });
        it('should return "Those books are suitable" with genre "Thriller" and age 18', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 18)).to.equal('Those books are suitable');
        });
        it('should return "Those books are suitable" with genre "Horror" and age 18', function () {
            expect(bookSelection.isGenreSuitable('Horror', 18)).to.equal('Those books are suitable');
        });
        it('should return "Books with Horror genre are not suitable for kids at 12 age', function () {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });
        it('should return "Books with Horror genre are not suitable for kids at 10 age', function () {
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');
        });
        it('should return "Books with Thriller genre are not suitable for kids at 12 age', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
        });
        it('should return "Books with Thriller genre are not suitable for kids at 10 age', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
        });
    })
    describe('isItAffordable method tests', function() {
        it('should throw error when price is string and budget integer', () => {
            expect(function() {bookSelection.isItAffordable('five', 10)}).to.throw('Invalid input');
        });
        it('should throw error when price is object and budget integer', () => {
            expect(function() {bookSelection.isItAffordable({}, 10)}).to.throw('Invalid input');
        });
        it('should throw error when price is array and budget integer', () => {
            expect(function() {bookSelection.isItAffordable([], 10)}).to.throw('Invalid input');
        });
        it('should throw error when price is integer and budget string', () => {
            expect(function() {bookSelection.isItAffordable(10, 'five')}).to.throw('Invalid input');
        });
        it('should throw error when price is integer and budget object', () => {
            expect(function() {bookSelection.isItAffordable(10, {})}).to.throw('Invalid input');
        });
        it('should throw error when price is integer and budget array', () => {
            expect(function() {bookSelection.isItAffordable(10, [])}).to.throw('Invalid input');
        });
        it('should return "You dont have enough money" when result is negative', () => {
            expect(bookSelection.isItAffordable(10, 5)).to.equal("You don't have enough money");
        });
        it('should return "Book bought. You have 10$ left" when result is 10', () => {
            expect(bookSelection.isItAffordable(10, 20)).to.equal("Book bought. You have 10$ left");
        });
    })
    describe('suitableTitles method tests', function() {
        it('should throw error when first parameter is string', () => {
            expect(function(){bookSelection.suitableTitles('array', 'Thriller')}).to.throw('Invalid input');
        });
        it('should throw error when first parameter is object', () => {
            expect(function(){bookSelection.suitableTitles({}, 'Thriller')}).to.throw('Invalid input');
        });
        it('should throw error when first parameter is integer', () => {
            expect(function(){bookSelection.suitableTitles(10, 'Thriller')}).to.throw('Invalid input');
        });
        it('should throw error when first parameter is array and second integer', () => {
            expect(function(){bookSelection.suitableTitles([], 10)}).to.throw('Invalid input');
        });
        it('should throw error when first parameter is array and second array', () => {
            expect(function(){bookSelection.suitableTitles([], [])}).to.throw('Invalid input');
        });
        it('should return array of titles when valid input is given', () => {
            let arr = [{title: 'Gladiator', genre: 'Historical'}, {title: 'Saw', genre: 'Horror'}];

            expect(bookSelection.suitableTitles(arr, 'Historical')).to.contain('Gladiator');
            expect(bookSelection.suitableTitles(arr, 'Historical')).to.have.lengthOf(1);
        });
    })
});
