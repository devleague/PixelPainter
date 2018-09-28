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
      expect(createGrid(1).childElementCount).to.equal(1);//Should return an HTMLElement with 1 child
      expect(createGrid(10).childElementCount).to.equal(10);//Should return an html element with 10 children.
    });
  });

  describe('columns', function(){
    it('If no column value is provided, columns should equal the number of rows.', function(){
      expect(createGrid(1).children[0].childElementCount).to.equal(1);//Should return an html element with 1 row, each with 1 column.
      expect(createGrid(10).children[0].childElementCount).to.equal(10);//Should return an html element with 10 rows, each with 10 columns.
    });
    it('If a column value is provided, that should be the number of columns returned.', function(){
      expect(createGrid(1, 10).children[0].childElementCount).to.equal(10);//Should return an html element with 1 row, each with 10 columns.
      expect(createGrid(10, 5).children[9].childElementCount).to.equal(5);// Should return an html element with 10 rows, each with 5 columns.
    });
  });

  describe('attributes', function(){
    it('If no column value is provided, all attributes should get applied to each grid element', function(){
      var tenGrid = createGrid(10, {class: 'grid', style: "color: blue"});
      // Should return an html element with 1 row, each with 1 column, each with no attributes.
      expect(createGrid(1, {}).children[0].children[0].attributes.length).to.equal(1);
      expect(tenGrid.children[0].children[9].getAttribute("class")).to.equal("grid");
      expect(tenGrid.children[0].children[9].getAttribute("style")).to.equal("color: blue");
    });
    it('If a column value is provided, that should be the number of columns returned, along with the attributes applied.', function(){
      expect(createGrid(10, 5, {class: 'grid'}).children[0].children[0].getAttribute("class")).to.equal("grid");
    });
  });
});