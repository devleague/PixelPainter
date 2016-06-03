function createGrid(row) {
  if (typeof row !== 'number' || row < 0){
    throw new Error();
  }
  return document.createElement("div");
}