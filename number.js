import grid from './grid.js'
const number = {
    numbers: [],
    getE: function () {
        const numberElements = document.getElementsByClassName('number')
        for (let numberE of numberElements) {
            this.numbers.push(numberE)
        }
    },
    spawn: function (grid) {
        const eCellI = grid.eRCellI();
        if (!eCellI) {
            return false;
        }
        const numberE = document.createElement('div');
        const numberValue = 2;
        numberE.innerText = numberValue;
        numberE.dataset.value = numberValue;
        numberE.classList.add('number');
        numberE.style.top = `${grid.cells[eCellI].top}px`;
        numberE.style.left = `${grid.cells[eCellI].left}px`;
        grid.cells[eCellI].number = numberE;
        grid.gridE.append(numberE);
        return true
    },
}
export default number
