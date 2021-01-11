
function solve() {
    let rows = document.getElementsByTagName('tr')
    y = -1
    for (row of rows) {
        y += 1
        cells = row.cells
        x = -1
        for (cell of cells) {
            deduction(cell)
        }
    }
}

let x= [1, 2, 3, 4]


