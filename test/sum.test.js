describe('sum', function () {
  
  before( function() { 
    console.log('Before all tests run.')
  });

  beforeEach( function() {
    console.log('Before each test runs.')
  });

  describe('Addition tests', function() {

    it('should return 3 for sum of 1 and 2', function () {
      chai.expect(sum(1, 2)).to.equal(3);
    });
  
    it('Should return 9 for 3,3,3', function() {
      chai.expect(sum(3,3,3)).to.equal(9);
    });
  
    it('Should return -10 for 10 and -20', function() {
      chai.expect(sum(10,-20)).to.equal(-10);
    });
  });
  
  describe( 'Multiplication tests', function() {
    
    it('Should return 100 for 10 and 10', function() {
      chai.expect(multi(10,10)).to.equal(100);
    });

    it('Should return -100 fro 10 and -10', function() {
      chai.expect(multi(10,-10)).to.equal(-100);
    })
  });

  describe( 'Factorials', function() {

    it('Factor of 5 should be 120', function() {
      chai.expect(factor(5)).to.equal(120);
    });

    it('Factor of 20 should be big.', function() {
      chai.expect(factor(20)).to.equal(2432902008176640000);
    });
  })

  describe('Slow function testing', function() {
    const iterations = 100;

    it('Fifty iterations (sync)', function() {
      chai.expect(slow(iterations)).to.equal(iterations * 10000000);
    });

    it('Fifty iterations (promise)', async function() {
      const result = await slowPromise(iterations);
      chai.expect(result).to.equal(iterations * 10000000);
    })

    it('Fifty iterations (callback)', function() {
      slowCallback(iterations, function(result) {
        chai.expect(result).to.equal(iterations * 10000000);
      });
    })
  });

});