var expect = chai.expect;
var assert = chai.assert;

describe('createGrid()', function() {
  it('there should be a function called createGrid', function () {
    expect(createGrid).to.be.a('function');
  });
  it('createGrid should return an HTMLElement', function () {
    expect(createGrid(1) instanceof HTMLElement).to.equal(true);
  });
});

describe('rows', function() {
  it('Should only accept a non-negative number', function () {
    expect(createGrid.bind(null, -1)).to.throw();
    expect(createGrid.bind(null, 1)).to.not.throw();
  });
  it('Should not accept an undefined value for rows', function () {
    expect(createGrid.bind(null, undefined)).to.throw();
  });
  it('Should not accept an empty Object for rows', function() {
    expect(createGrid.bind(null, {})).to.throw();
  });
  it('should return an HTMLElement', function () {
    expect(createGrid(1) instanceof HTMLElement).to.equal(true);
  });
  it('should return the same number of rows as provided', function () {
    expect(createGrid(1).childNodes.length).to.equal(1);
    expect(createGrid(10).childNodes.length).to.equal(10);
  });
});

describe('columns', function() {
  it('If no column value is provided, columns should equal the number of rows.', function () {
    expect(createGrid(1).getElementsByClassName("column").length).to.equal(1);
    expect(createGrid(10).getElementsByClassName("column").length).to.equal(10);
  });
  it('If a column value is provided, that should be the number of columns returned.', function () {
    expect(createGrid(1, 10).getElementsByClassName("column").length).to.equal(10);
    expect(createGrid(1, 10).getElementsByClassName("row").length).to.equal(1);
    expect(createGrid(10, 5).getElementsByClassName("row").length).to.equal(10);
    expect(createGrid(10, 5).getElementsByClassName("column").length).to.equal(50);
  });
});

describe('attributes', function() {
  it('If no column value is provided, all attributes should get applied to each grid element', function() {
    expect(createGrid(1, {}).getElementsByClassName("row").length).to.equal(1);
    expect(createGrid(1, {}).getElementsByClassName("column").length).to.equal(1);

  });

});