var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;
/**
 * Creates a grid of elements.
 * @param {number} rows – The number of rows in the grid.
 * @param {number} columns – The number of columns in the grid.
 * @param {object} attributes - The attributes to apply to each grid element
 * @returns {HTMLElement} – The DOM element containing the grid of divs
 */

/*Specs
- There should be a function called `createGrid`.
*/
describe('createGrid', function(){
  it('should be a function', function(){
    assert.isFunction(createGrid, "hahahahahahah");
    assert.isNotObject(createGrid, 'This is wrongggg:D');
  });
  it('should return an "HTMLElement"', function() {
    expect(createGrid(1)).to.be.an.instanceOf(HTMLElement);
  });
  describe('rows', function() {
    it('should only accept a non-negative number', function() {
      expect(createGrid.bind(null)).to.throw();
      expect(createGrid.bind(null, {})).to.throw();
      expect(createGrid.bind(null, -1)).to.throw();
      expect(createGrid.bind(null, 1)).to.not.throw();
    });
    it('should return the same number of rows as provided', function() {
      //createGrid(1) Should return an HTMLElement with 1 child.
      expect(createGrid(1).childElementCount).to.equal(1);
      expect(createGrid(10).childElementCount).to.equal(10);
    });
  });
});