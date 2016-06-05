var expect = chai.expect;

describe('createGrid', function () {

  it('Should be a function called createGrid', function () {
    expect(createGrid).to.be.a('function');
  });

  it('Should return an HTMLElement', function () {
    expect(createGrid).to.be.an.instanceof(Function);
  });

  describe('rows', function () {

    it('Should only accept a non-negative number', function () {
      expect(createGrid.bind(this)).to.throw(Error);
      expect(createGrid.bind(this, {})).to.throw(Error);
      expect(createGrid.bind(this, -1)).to.throw(Error);
      expect(createGrid.bind(this, 1)).to.not.throw(Error);
    });

    it('Should return an HTMLElement', function () {
      expect(createGrid.bind(this, 1)).to.be.an.instanceof(Function);
    });

    it('Should return the same number of rows as provided', function (){
      expect(createGrid(1).children).to.have.length(1);
      expect(createGrid(10).children).to.have.length(10);
    });
  });

  describe('columns', function () {

    it('If no column value is provided, columns should equal the number of rows', function () {
      expect(createGrid(1))
    });
  });

});