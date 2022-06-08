const library = require('./library');
const expect = require('chai').expect;

describe('library tests', () => {
    describe('calcPriceOfBook method tests', function() {
        it('should throw when nameOfBook is integer', function() {
            expect(function() {library.calcPriceOfBook(10, 2022)}).to.throw('Invalid input');
        });
        it('should throw when year is string', function() {
            expect(function() {library.calcPriceOfBook('Pod Igoto', '1878')}).to.throw('Invalid input');
        });
        it('should return price 20 with year after 1980', function() {
            expect(library.calcPriceOfBook('Moqta Kniga', 1990)).to.equal('Price of Moqta Kniga is 20.00');
        });
        it('should return price 10 with year before 1980', function() {
            expect(library.calcPriceOfBook('Moqta Kniga', 1970)).to.equal('Price of Moqta Kniga is 10.00');
        });
        it('should return price 10 when year equals 1980', function() {
            expect(library.calcPriceOfBook('Moqta Kniga', 1980)).to.equal('Price of Moqta Kniga is 10.00');
        });
    })

    describe('findBook method tests', function() {
        it('should throw when bookArr is empty', function() {
            expect(function() {library.findBook([], 'Pod Igoto')}).to.throw('No books currently available');
        });
        it('should find book when available', function() {
            expect(library.findBook(['Pod Igoto', 'Hushove'], 'Pod Igoto')).to.equal('We found the book you want.');
        });
        it('should not find book when not available', function() {
            expect(library.findBook(['Pod Igoto', 'Hushove'], 'East of Eden')).to.equal('The book you are looking for is not here!');
        });
    })

    describe('arrangeTheBooks method tests', function() {
        it('should throw when countBooks is string', function() {
            expect(function() {library.arrangeTheBooks('10')}).to.throw('Invalid input');
        });
        it('should throw when countBooks is less than 0', function() {
            expect(function() {library.arrangeTheBooks(-5)}).to.throw('Invalid input');
        });
        it('should return success when countBooks is 40', function() {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('should return success when countBooks less than 40', function() {
            expect(library.arrangeTheBooks(30)).to.equal('Great job, the books are arranged.');
        });
        it('should return unsuccessfull when countBooks greater than 40', function() {
            expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    })
})