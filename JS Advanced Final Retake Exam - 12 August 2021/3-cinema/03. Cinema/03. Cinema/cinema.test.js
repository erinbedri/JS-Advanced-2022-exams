const cinema = require('./cinema');
const expect = require('chai').expect;

describe('cinema function tests', function () {
    describe('showMovies method tests', function () {
        it('should return no movies when empty array', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('should throw without arguments', () => {
            expect(() => {cinema.showMovies()}).to.throw(TypeError);
        });
        it('should throw with inorrect arguments', () => {
            expect(() => {cinema.showMovies({1: 2})}).to.throw(TypeError);
        });
        it('should return 1 movie name with array of length 1', () => {
            expect(cinema.showMovies(['Test 1'])).to.equal('Test 1');
        });
        it('should return 2 movie names with array of length 2', () => {
            expect(cinema.showMovies(['Test 1', 'Test 2'])).to.equal('Test 1, Test 2');
        });
    });
    describe('ticketPrice method tests', function () {
        it('should throw with projectionType not present in schedule', () => {
            expect(() => {cinema.ticketPrice('Invalid')}).to.throw('Invalid projection type.');
        });
        it('should throw with projectionType is present but wrongly written', () => {
            expect(() => {cinema.ticketPrice('premiere')}).to.throw('Invalid projection type.');
        });
        it('should throw with invalid projectionType', () => {
            expect(() => {cinema.ticketPrice([])}).to.throw('Invalid projection type.');
        });
        it('should return 12.00 with Premiere as projectionType', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it('should return 7.50 with Normal as projectionType', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });
        it('should return 5.50 with Discount as projectionType', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });
    describe('swapSeatsInHall method tests', function () {
        it('should return unsuccessful when no arguments', () => {
            expect(cinema.swapSeatsInHall()).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when 1 arguments', () => {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when firstPlace string', () => {
            expect(cinema.swapSeatsInHall('1', 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when firstPlace is float', () => {
            expect(cinema.swapSeatsInHall(1.5, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when secondPlace string', () => {
            expect(cinema.swapSeatsInHall(1, '2')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when secondPlace is float', () => {
            expect(cinema.swapSeatsInHall(1, 2.5)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when firstPlace is 0', () => {
            expect(cinema.swapSeatsInHall(0, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when firstPlace is negative', () => {
            expect(cinema.swapSeatsInHall(-1, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when secondPlace is 0', () => {
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when secondPlace is negative', () => {
            expect(cinema.swapSeatsInHall(1, -2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when firstPlace is greater than 20', () => {
            expect(cinema.swapSeatsInHall(21, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when secondPlace is greater than 20', () => {
            expect(cinema.swapSeatsInHall(1, 22)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return unsuccessful when firstPlace equals secondPlace', () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return successful when arguments are valid 1', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
        });
        it('should return successful when arguments are valid 2', () => {
            expect(cinema.swapSeatsInHall(20, 10)).to.equal('Successful change of seats in the hall.');
        });
    });
})