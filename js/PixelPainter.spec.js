var expect = chai.expect;

describe('createGrid', function () {
  it('should be a function called createGrid', function () {
    expect(createGrid).to.be.a('function'); //typeof
    expect(createGrid).to.be.an.instanceof(Function); //instanceof
  });

  describe('rows parameter', function () {
    it('should accept a non-negative number', function () {
      expect(createGrid.bind(null)).to.throw();
      expect(createGrid.bind(null, {})).to.throw();
      expect(createGrid.bind(null, -1)).to.throw();
      expect(createGrid.bind(null, 1)).to.not.throw();
    });

    it('should return an HTMLElement', function () {
      expect(createGrid(1)).to.be.an.instanceof(HTMLElement);
    });
  });

});