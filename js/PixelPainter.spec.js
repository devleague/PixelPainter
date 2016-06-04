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

    it('should return the same number of rows as provided', function () {
      expect(createGrid(1).children).to.have.length(1);
      expect(createGrid(10).children).to.have.length(10);
    });
  });

  describe('columns parameter', function () {
    it('if no column value is provided, columns should equal the number of rows', function () {
      expect(createGrid(1).children).to.have.length(1);
      expect(createGrid(1).children[0].children).to.have.length(1);
      expect(createGrid(10).children).to.have.length(10);
      expect(createGrid(10).children[0].children).to.have.length(10);
    });
    it('if a column value is provided, that should be the number of columns returned', function () {
      expect(createGrid(1, 10).children).to.have.length(1);
      expect(createGrid(1, 10).children[0].children).to.have.length(10);
      expect(createGrid(10, 5).children).to.have.length(10);
      expect(createGrid(10, 5).children[0].children).to.have.length(5);
    });
  });

  describe('attributes parameter', function () {
    it('if no column value is provided, all attributes should get applied to each grid element', function () {
      expect(createGrid(1, {}).children).to.have.length(1);
      expect(createGrid(1, {}).children[0].attributes).to.have.length(0);
      expect(createGrid(1, {}).children[0].children).to.have.length(1);
      expect(createGrid(1, {}).children[0].children[0].attributes).to.have.length(0);
      expect(createGrid(10, {class: 'grid'}).children).to.have.length(10);
      expect(createGrid(10, {class: 'grid'}).children[0].className).to.equal('grid');
      expect(createGrid(10, {class: 'grid'}).children[0].children).to.have.length(10);
      expect(createGrid(10, {class: 'grid'}).children[0].children[0].className).to.equal('grid');
      expect(createGrid(10, {class: 'grid', style: 'background-color: black'}).children).to.have.length(10);
      expect(createGrid(10, {class: 'grid', style: 'background-color: black'}).children[0].className).to.equal('grid');
      expect(createGrid(10, {class: 'grid', style: 'background-color: black'}).children[0].style.backgroundColor).to.equal('black');
      expect(createGrid(10, {class: 'grid', style: 'background-color: black'}).children[0].children).to.have.length(10);
      expect(createGrid(10, {class: 'grid', style: 'background-color: black'}).children[0].children[0].className).to.equal('grid');
      expect(createGrid(10, {class: 'grid', style: 'background-color: black'}).children[0].children[0].style.backgroundColor).to.equal('black');
    });
    it('if a column value is provided, that should be the number of columns returned, along with the attributes applied', function () {
      expect(createGrid(10, 5, {class: 'grid'}).children).to.have.length(10);
      expect(createGrid(10, 5, {class: 'grid'}).children[0].className).to.equal('grid');
      expect(createGrid(10, 5, {class: 'grid'}).children[0].children).to.have.length(5);
      expect(createGrid(10, 5, {class: 'grid'}).children[0].children[0].className).to.equal('grid');
    });
  });
});