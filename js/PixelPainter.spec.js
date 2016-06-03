var expect = chai.expect;

describe('createGrid', function () {
  it('should be a function called createGrid', function () {
    expect(createGrid).to.be.a('function');
    expect(createGrid).to.be.an.instanceof(Function);
  });

  it('createGrid should return an HTMLElement', function (){
    expect(createGrid(1)).to.be.an.instanceof(HTMLElement);
  });

describe('createRows', function () {
  it('should accept non-negative values', function (){
    // expect(createGrid.bind()).to.be.above(0);
    expect(createGrid.bind(null)).to.throw(Error);
    expect(createGrid.bind(null, {})).to.throw(Error);
    expect(createGrid.bind(null, -1)).to.throw(Error);
    expect(createGrid.bind(null, 1)).to.not.throw(Error);
  });

  it('should return an HTMLElement', function(){
    expect(createGrid(1)).to.be.an.instanceof(HTMLElement);
  });
});

describe.skip('columns', function (){
  it('if no column value is provided, columns should equal the number');
});


});