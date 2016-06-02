var expect = chai.expect;

describe('createGrid', function () {
  it('should be a function called createGrid', function () {
    expect(createGrid).to.be.a('function'); //typeof
    expect(createGrid).to.be.an.instanceof(Function); //instanceof
  });

});