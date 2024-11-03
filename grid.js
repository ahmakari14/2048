import number from './number.js';
const grid = {
    gridE: document.querySelector('.grid'),
    cells: [],
    playing: false,
    init: function () {
        const cellEs = document.getElementsByClassName('cell');
        let cellIndex = 1;
        for (let cellE of cellEs) {
            grid.cells[cellIndex] = {
                element: cellE,
                top: cellE.offsetTop,
                left: cellE.offsetLeft,
                number: null
            }
            cellIndex++
            number.spawn(grid);
        }
        this.playing = true
    },
    eRCellI: function () {
        let eCells = [];
        for (let i = 1; i < this.cells.length; i++) {
            if (this.cells[i].number === null) {
                eCells.push(i);
            }
        }
        return eCells.length;

    },
}
export default grid;