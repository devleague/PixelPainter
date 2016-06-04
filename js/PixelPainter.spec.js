var expect = chai.expect;

describe('createGrid', function () {
  it('should be a function called createGrid', function () {
    expect(createGrid).to.be.a('function');
    expect(createGrid).to.be.an.instanceof(Function);
  });

  it('createGrid should return an HTMLElement', function (){
    expect(createGrid(1)).to.be.an.instanceof(HTMLElement);
  });

describe('rows parameter', function () {
  it('should accept non-negative values', function (){
    expect(createGrid.bind(null)).to.throw(Error);
    expect(createGrid.bind(null, {})).to.throw(Error);
    expect(createGrid.bind(null, -1)).to.throw(Error);
    expect(createGrid.bind(null, 1)).to.not.throw(Error);
  });

  it('should return an HTMLElement', function(){
    expect(createGrid(1)).to.be.an.instanceof(HTMLElement);
  });

  it('should return the same number of rows as provided', function() {
    expect (createGrid(1).childNodes).to.have.length(1);
    expect(createGrid(10).childNodes).to.have.length(10);
  });

});

describe.skip('columns parameter', function (){
  it('if no column value is provided, columns should equal the number');
});


});