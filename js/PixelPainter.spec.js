var expect = chai.expect;
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

  describe('rows', function() {
    it('should only accept a non-negative number', function() {
      expect(createGrid).to.be.a.function;
      expect(createGrid({}).bind.to.throw(Error));
      //expect(createGrid(-1).should.not.throw(Error));
      //expect(createGrid(1).should.not.throw(Error));
    });
    it.skip('should return an "HTMLElement"', function() {
      expect(createGrid(1).to.equal("HTMLElement"));
    });
  });
});
//     it('should return the same number of rows as provided', function() {
//       expect(createGrid(1).to.equal("HTMLElement") with 1 child
//       `createGrid(10)` Should return an html element with 10 children
//     });

//   describe.skip('columns', function() {
//     it('If no column value is provided, columns should equal the number of rows', function() {
//       expect(createGrid().bind(null, "1", "1")).to.throw(Error);
//     });
//     it('If a column value is provided, that should be the number of columns returned', function() {
//       expect(createGrid().bind(null, "1", "1")).to.throw(Error);
//     });
//   });

//   describe.skip('attributes', function() {
//   it('If no column value is provided, all attributes should get applied to each grid element', function() {
//     expect(createGrid().bind(null, "1", "1")).to.throw(Error);
//   });
//   it('If a column value is provided, that should be the number of columns returned, along with the attributes applied.', function() {
//     expect(createGrid().bind(null, "1", "1")).to.throw(Error);
//   });
// });

// - `createGrid` should return an `HTMLElement`.

// - `rows`
//   - Should only accept be a non-negative number
//     - `createGrid()` should throw a `Error`.
//     - `createGrid({})` should throw a `Error`.
//     - `createGrid(-1)` should *not* throw an `Error`.
//     - `createGrid(1)` should *not* throw an `Error`.
//   - Should return an `HTMLElement`
//     - `createGrid(1)` should return an `HTMLElement`.
//   - Should return the same number of rows as provided.
//     - `createGrid(1)` Should return an `HTMLElement` with 1 child.
//     - `createGrid(10)` Should return an html element with 10 children.

// - `columns`
//   - If no column value is provided, columns should equal the number of rows.
//     - `createGrid(1)` Should return an html element with 1 row, each with 1 column.
//     - `createGrid(10)` Should return an html element with 10 rows, each with 10 columns.
//   - If a column value is provided, that should be the number of columns returned.
//     - `createGrid(1, 10)` Should return an html element with 1 row, each with 10 columns.
//     - `createGrid(10, 5)` Should return an html element with 10 rows, each with 5 columns.

// - `attributes`
//   - If no column value is provided, all attributes should get applied to each grid element
//     - `createGrid(1, {})` Should return an html element with 1 row, each with 1 column, each with no attributes.
//     - `createGrid(10, {class: 'grid'})` Should return an html element with 10 rows, each with 10 columns, each with the `class` of `grid`.
//     - `createGrid(10, {class: 'grid', style: 'background-color: black'})` Should return an html element with 10 rows, each with 10 columns, each with the `class` of `grid` and `style` of 'background-color: black'.
//   - If a column value is provided, that should be the number of columns returned, along with the attributes applied.
//     - `createGrid(10, 5, {class: 'grid'})` Should return an html element with 10 rows, each with 5 columns, each with the `class` of `grid`.
